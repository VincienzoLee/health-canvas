const express = require("express");
const router = express.Router();
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

router.route("/").get(async (_req, res) => {
  try {
    let hospitalsData = [];
    let hospitalCodes = [];

    const { data: hospitalsResponse } = await axios.get(
      "http://www.edwaittimes.ca/Shared/Images/sites2.csv"
    );

    hospitalCodes = hospitalsResponse
      .split("\n")
      .map((code) => code.replace("\r", "").split("|")[0]);
    hospitalCodes.pop();

    await Promise.all(
      hospitalCodes.map(async (hospitalCode, i) => {
        try {
          const { data: hospitalResponse } = await axios.get(
            `http://www.edwaittimes.ca/Shared/Images/${hospitalCode}.html`
          );
          const DOMTree = new JSDOM(hospitalResponse);
          hospitalsData.push({
            busy:
              DOMTree.window.document.querySelector("img")?.src ===
              "Shared/Images/exclamation.png"
                ? true
                : false,
            lengthOfStay:
              DOMTree.window.document.querySelectorAll(".cell p")[1]
                ?.textContent,
            name: DOMTree.window.document.querySelector("a")?.textContent,
            waitTime:
              DOMTree.window.document.querySelectorAll(".cell p")[0]
                ?.textContent,
          });

          if (i === hospitalCodes.length - 1) {
            return res.json({ hospitalsData });
          }
        } catch (error) {
          console.error(
            `Error fetching data for hospital ${hospitalCode}: ${error.message}`
          );
          // Handle the error as needed
        }
      })
    );
  } catch (error) {
    console.error(`Error fetching hospital codes: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Emergency.scss";
import Sort from "../../assets/icons/sort.svg";

const Emergency = () => {
  const [emergency, setEmergencyTimes] = useState([]);
  const [sortOrder, setSortOrder] = useState({});

  const url = "http://localhost:8080/emergency";

  const fetchHospitalData = async () => {
    let retries = 10;
    while (retries > 0) {
      try {
        const response = await axios.get(url);
        const data = response.data.hospitalsData;

        if (data.length >= 35) {
          setEmergencyTimes(data);
          return; // Successful response, exit the loop
        }
        // else {
        //   console.warn("Incomplete response. Retrying...");
        // }
      } catch (error) {
        console.error("Error retrieving ED Data", error);
        retries--;
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }

    console.error("Unable to get complete data. Please refresh the page");
  };

  useEffect(() => {
    fetchHospitalData();
  }, [url]);

  const sortedByProperty = (property) => {
    const isDescending = sortOrder[property] === "desc";

    const sortedArray = [...emergency].map((item, index) => ({
      ...item,
      index,
    }));

    sortedArray.sort((a, b) => {
      let comparison = 0;

      const aValue = String(a[property]).toLowerCase();
      const bValue = String(b[property]).toLowerCase();

      if (aValue > bValue) {
        comparison = isDescending ? -1 : 1;
      } else if (aValue < bValue) {
        comparison = isDescending ? 1 : -1;
      } else {
        // If the primary key is the same, use the index as a tiebreaker
        comparison = a.index - b.index;
      }

      return comparison;
    });

    const updatedEmergency = sortedArray.map((item) => ({
      ...item,
      index: undefined,
    }));
    setEmergencyTimes(updatedEmergency);

    // Toggle sort order for the clicked column
    setSortOrder({
      ...sortOrder,
      [property]: isDescending ? "asc" : "desc",
    });
  };

  return (
    <section className="emergency">
      <table className="emergency__table">
        <tbody className="emergency__body">
          <tr className="emergency__row">
            <th className="emergency__column">
              <div className="emergency__column-wrapper">
                <div className="emergency__column-hospitals">
                  {"Hospitals".toUpperCase()}
                </div>
                <img
                  onClick={() => sortedByProperty("name")}
                  src={Sort}
                  alt="Sort"
                />
              </div>
            </th>
            <th className="emergency__column">
              <div className="emergency__column-wrapper">
                <div>{"Wait Time".toUpperCase()}</div>
                <img
                  onClick={() => sortedByProperty("waitTime")}
                  src={Sort}
                  alt="Sort"
                />
              </div>
            </th>
            <th className="emergency__column">
              <div className="emergency__column-wrapper">
                <div>
                  {`Expected`.toUpperCase()} <br />{" "}
                  {`Length of Stay`.toUpperCase()}
                </div>
                <img
                  onClick={() => sortedByProperty("lengthOfStay")}
                  src={Sort}
                  alt="Sort"
                />
              </div>
            </th>
            <th className="emergency__column">
              <div className="emergency__column-wrapper">
                <div>{"Status".toUpperCase()}</div>
                <img
                  onClick={() => sortedByProperty("busy")}
                  src={Sort}
                  alt="Sort"
                />
              </div>
            </th>
          </tr>
          {emergency.map((hospital, index) => (
            <tr className="emergency__hospital" key={index}>
              <td className="emergency__data-hospital">
                <div>{hospital.name}</div>
              </td>
              <td>
                <div className="emergency__data">
                  {hospital.waitTime || "N/A"}
                </div>
              </td>
              <td>
                <div className="emergency__data">
                  {hospital.lengthOfStay || "N/A"}
                </div>
              </td>
              <td>
                <div
                  className="emergency__data"
                  style={{ color: hospital.busy ? "red" : "green" }}
                >
                  {hospital.busy ? "Busy" : "Not Busy"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Emergency;

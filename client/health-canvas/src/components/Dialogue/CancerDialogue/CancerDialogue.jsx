import React, { useState } from "react";
import "./CancerDialogue.scss";

const CardiovascularDiagnosis = () => {
  const [dialogue, setDialogue] = useState(0);
  const [symptoms, setSymptoms] = useState({
    weightLoss: 0,
    fatigue: 0,
    pain: 0,
    skinChanges: 0,
    bowelBladderChanges: 0,
    persistentCough: 0,
    difficultySwallowing: 0,
    lumpsThickening: 0,
    advancedWeightLoss: 0,
    severeFatigue: 0,
    severePain: 0,
    jaundice: 0,
    difficultyBreathing: 0,
    neurologicalSymptoms: 0,
    digestiveIssues: 0,
    swellingFluidBuildup: 0,
  });

  const handleOptionClick = (answer) => {
    // Update the dialogue state accordingly
    setDialogue(dialogue + 1);

    // Update symptoms and calculate total score based on the answer
    if (answer === "Yes" && dialogues[dialogue].points) {
      const updatedSymptoms = { ...symptoms, ...dialogues[dialogue].points };
      setSymptoms(updatedSymptoms);
    }
  };

  const handleStartOver = () => {
    // Reset the dialogue state and symptoms to the beginning
    setDialogue(0);
    setSymptoms({
      weightLoss: 0,
      fatigue: 0,
      pain: 0,
      skinChanges: 0,
      bowelBladderChanges: 0,
      persistentCough: 0,
      difficultySwallowing: 0,
      lumpsThickening: 0,
      advancedWeightLoss: 0,
      severeFatigue: 0,
      severePain: 0,
      jaundice: 0,
      difficultyBreathing: 0,
      neurologicalSymptoms: 0,
      digestiveIssues: 0,
      swellingFluidBuildup: 0,
    });
  };

  const dialogues = [
    {
      id: 1,
      text: (
        <div>
          <div className="cancer__wrapper">
            "Welcome to the general cancer screening tool !
          </div>
          <div className="cancer__wrapper">
            We will ask you about early and late symptoms of cancer.
          </div>
        </div>
      ),
      points: { points: 0 },
    },
    {
      id: 2,
      text: "Do you have unexplained weight loss?",
      points: { weightLoss: 4 },
    },
    {
      id: 3,
      text: "Do you experience fatigue?",
      points: { fatigue: 2 },
    },
    {
      id: 4,
      text: "Do you have pain?",
      points: { pain: 3 },
    },
    {
      id: 5,
      text: "Have you noticed any changes in your skin?",
      points: { skinChanges: 1 },
    },
    {
      id: 6,
      text: "Have there been changes in your bowel or bladder habits?",
      points: { bowelBladderChanges: 3 },
    },
    {
      id: 7,
      text: "Do you have a persistent cough or hoarseness?",
      points: { persistentCough: 2 },
    },
    {
      id: 8,
      text: "Do you experience difficulty swallowing?",
      points: { difficultySwallowing: 3 },
    },
    {
      id: 9,
      text: "Have you noticed lumps or thickening?",
      points: { lumpsThickening: 4 },
    },
    {
      id: 10,
      text: "Have you experienced advanced weight loss?",
      points: { advancedWeightLoss: 5 },
    },
    {
      id: 11,
      text: "Do you have severe fatigue?",
      points: { severeFatigue: 4 },
    },
    {
      id: 12,
      text: "Do you experience severe pain?",
      points: { severePain: 5 },
    },
    {
      id: 13,
      text: (
        <div className="cancer__wrapper">
          Have you noticed&nbsp;
          <div className="cancer__dictionary">
            jaundice?
            <span className="cancer__dictionary__definition">
              Jaundice is caused by the build-up of a substance called bilirubin
              in your blood. When an adult becomes jaundiced, it can be a sign
              of a more serious underlying condition. Jaundice is usually a
              symptom of liver disease. This happens because your damaged liver
              cells cannot process bilirubin.
            </span>
          </div>
        </div>
      ),
      points: { jaundice: 6 },
    },
    {
      id: 14,
      text: "Do you experience difficulty breathing?",
      points: { difficultyBreathing: 4 },
    },
    {
      id: 15,
      text: "Have you experienced neurological symptoms?",
      points: { neurologicalSymptoms: 4 },
    },
    {
      id: 16,
      text: "Do you have digestive issues?",
      points: { digestiveIssues: 3 },
    },
    {
      id: 17,
      text: "Do you experience swelling or fluid buildup?",
      points: { swellingFluidBuildup: 3 },
    },
    {
      id: 18,
      text: (
        <>
          <table className="cancer">
            <tbody>
              <tr className="cancer__row">
                <th className="cancer__column">Risk Calculated</th>
                <th className="cancer__column">Score Range</th>
                <th className="cancer__column">Recommendation</th>
              </tr>
              <tr className="cancer__row">
                <td className="cancer__data">Very Low Risk</td>
                <td className="cancer__data">Total Score 0-10</td>
                <td className="cancer__data"> Keep making healthy choices !</td>
              </tr>
              <tr className="cancer__row">
                <td className="cancer__data">Moderate to High Risk</td>
                <td className="cancer__data">Total Score 21-35</td>
                <td className="cancer__data">
                  We strongly recommend getting a full checkup as soon as
                  possible.
                </td>
              </tr>
              <tr className="cancer__row">
                <td className="cancer__data">High Risk</td>
                <td className="cancer__data">Total Score 36-56</td>
                <td className="cancer__data">
                  Please consult a doctor as soon as possible in person about
                  these symptoms.
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <div className="cancer__nb">
            NB: Some of these early and late symptoms may overlap with your
            current medical condition, and could be explained by it. However, if
            possible, please go for regular check ups to see if anything has
            changed since your last visit.
          </div>
        </>
      ),
    },
  ];

  const currentDialogue = dialogues[dialogue] || {
    text: "",
    points: null,
  };

  return (
    <div className="cancer">
      {dialogue === dialogues.length - 1 && (
        <div>
          <p className="cancer__score">
            General Cancer Screening Score:{" "}
            {Object.values(symptoms).reduce((sum, value) => sum + value, 0)}
          </p>
        </div>
      )}
      <div className="cancer__text">{currentDialogue.text}</div>
      <div className="cancer__button-wrapper">
        {dialogue < dialogues.length - 1 && (
          <>
            <button
              className="cancer__button"
              onClick={() => handleOptionClick("Yes")}
            >
              Yes
            </button>
            <button
              className="cancer__button"
              onClick={() => handleOptionClick("No")}
            >
              No
            </button>
          </>
        )}
        {dialogue < dialogues.length && (
          <>
            <button
              className="cancer__button cancer__start-over"
              onClick={handleStartOver}
            >
              Start Over
            </button>
          </>
        )}
        {dialogue == dialogues.length - 1 && (
          <button
            className="cancer__button cancer__add-result"
            onClick={handleStartOver}
          >
            Add Result To Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default CardiovascularDiagnosis;

import { useState } from "react";
import "./CardiovascularDialogue.scss";

const CardiovascularDiagnosis = () => {
  const [dialogue, setDialogue] = useState(0);

  const handleOptionClick = (option) => {
    // Logic to determine the next dialogue based on the chosen option
    // Update the dialogue state accordingly
    setDialogue(option.nextDialogue);
  };

  const handleStartOver = () => {
    // Reset the dialogue state to the beginning
    setDialogue(0);
  };

  const dialogues = [
    {
      id: 0,
      text: "Welcome to the Cardiovascular Disease Self-Diagnosis Tool!",
      options: [{ text: "Begin Diagnosis", nextDialogue: 1 }],
    },
    {
      id: 1,
      text: "Select a symptom you are experiencing:",
      options: [
        { text: "High Blood Pressure", nextDialogue: 2 },
        { text: "Chest Pain or Discomfort", nextDialogue: 3 },
        { text: "Shortness of Breath", nextDialogue: 4 },
        { text: "Irregular Heartbeat", nextDialogue: 5 },
        { text: "Leg Pain or Numbness", nextDialogue: 6 },
      ],
    },
    {
      id: 2,
      text: "You may be experiencing hypertension. It's essential to monitor your blood pressure regularly. Do you have a history of high blood pressure?",
      options: [
        { text: "Yes", nextDialogue: 7 },
        { text: "No", nextDialogue: 8 },
      ],
    },
    {
      id: 3,
      text: "Chest pain or discomfort can be a sign of coronary artery disease. Have you experienced this symptom during physical activity?",
      options: [
        { text: "Yes", nextDialogue: 9 },
        { text: "No", nextDialogue: 10 },
      ],
    },
    {
      id: 4,
      text: "Shortness of breath can be related to heart failure. Have you noticed this symptom worsening when lying down?",
      options: [
        { text: "Yes", nextDialogue: 11 },
        { text: "No", nextDialogue: 12 },
      ],
    },
    {
      id: 5,
      text: "Irregular heartbeat may indicate an arrhythmia. Have you experienced palpitations or a fluttering sensation in your chest?",
      options: [
        { text: "Yes", nextDialogue: 13 },
        { text: "No", nextDialogue: 14 },
      ],
    },
    {
      id: 6,
      text: "Leg pain or numbness may be a symptom of peripheral artery disease. Have you experienced pain or cramping in your legs during walking?",
      options: [
        { text: "Yes", nextDialogue: 15 },
        { text: "No", nextDialogue: 16 },
      ],
    },
  ];

  const currentDialogue = dialogues[dialogue] || { text: "", options: [] };

  return (
    <div className="cardio">
      <div className="cardio__text">{currentDialogue.text}</div>
      <div>
        {currentDialogue.options.map((option, index) => (
          <button
            className="cardio__button"
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button
        className="cardio__button cardio__start-over"
        onClick={handleStartOver}
      >
        Start Over
      </button>
    </div>
  );
};

export default CardiovascularDiagnosis;

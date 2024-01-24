import React, { useState, useEffect } from "react";
import "./Alarm.scss";

// Modal component
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Alarm component
const Alarm = () => {
  const [alarms, setAlarms] = useState(() => {
    const storedAlarms = localStorage.getItem("alarms");
    return storedAlarms ? JSON.parse(storedAlarms) : [];
  });

  const [currentAlarm, setCurrentAlarm] = useState({
    label: "",
    selectedDays: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    alarmTime: "",
  });

  const [currentTime, setCurrentTime] = useState("");
  const [isAlarmActive, setIsAlarmActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalClosed, setModalClosed] = useState(true);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("alarms", JSON.stringify(alarms));
  }, [alarms]);

  useEffect(() => {
    const checkAlarms = () => {
      const now = new Date();

      alarms.forEach((alarm) => {
        const currentDay = now
          .toLocaleDateString("en-US", { weekday: "long" })
          .toLowerCase();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        if (
          alarm.selectedDays[currentDay] &&
          alarm.alarmTime &&
          parseInt(alarm.alarmTime.split(":")[0], 10) === currentHour &&
          parseInt(alarm.alarmTime.split(":")[1], 10) === currentMinute &&
          !isModalOpen &&
          modalClosed
        ) {
          // Show system notification with custom label
          if (Notification.permission === "granted") {
            new Notification(`Alarm: ${alarm.label || "Untitled"}`);
          } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                new Notification(`Alarm: ${alarm.label || "Untitled"}`);
              }
            });
          }

          setIsModalOpen(true);
        }
      });
    };

    const interval = setInterval(checkAlarms, 1000);

    return () => clearInterval(interval);
  }, [alarms, isModalOpen, modalClosed]);

  const toggleDay = (day) => {
    setCurrentAlarm((prevAlarm) => ({
      ...prevAlarm,
      selectedDays: {
        ...prevAlarm.selectedDays,
        [day]: !prevAlarm.selectedDays[day],
      },
    }));
  };

  const handleTimeChange = (e) => {
    setCurrentAlarm((prevAlarm) => ({
      ...prevAlarm,
      alarmTime: e.target.value,
    }));
  };

  const handleLabelChange = (e) => {
    setCurrentAlarm((prevAlarm) => ({ ...prevAlarm, label: e.target.value }));
  };

  const addAlarm = () => {
    setAlarms((prevAlarms) => [...prevAlarms, { ...currentAlarm }]);
    setCurrentAlarm({
      label: "",
      selectedDays: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      alarmTime: "",
    });
  };

  const deleteAlarm = (index) => {
    setAlarms((prevAlarms) => prevAlarms.filter((_, i) => i !== index));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalClosed(false);
  };

  return (
    <div className="alarm">
      <h1 className="alarm__current-time">Current Time: {currentTime}</h1>
      <div>
        {alarms.map((alarm, index) => (
          <div key={index}>
            <h2>{alarm.label}</h2>
            <p>
              Days:{" "}
              {Object.keys(alarm.selectedDays)
                .filter((day) => alarm.selectedDays[day])
                .join(", ")}
            </p>
            <p>Time: {alarm.alarmTime}</p>
            <button onClick={() => deleteAlarm(index)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <label>Label:</label>
        <input
          type="text"
          value={currentAlarm.label}
          onChange={handleLabelChange}
        />
      </div>
      <div>
        {Object.keys(currentAlarm.selectedDays).map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={currentAlarm.selectedDays[day]}
              onChange={() => toggleDay(day)}
            />
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </label>
        ))}
      </div>
      <div>
        <label>Set Alarm Time:</label>
        <input
          type="time"
          value={currentAlarm.alarmTime}
          onChange={handleTimeChange}
        />
      </div>
      <button className="alarm__button" onClick={addAlarm}>
        Add Alarm
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>Alarm: {currentAlarm.label || "Set Alarm Activated"}</p>
      </Modal>
    </div>
  );
};

export default Alarm;

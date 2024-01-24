import React, { useEffect, useState, useRef } from "react";
import "./TextAppear.scss";

const TextAppear = ({ texts, repeatLine, transitionDelay }) => {
  const [visibleText, setVisibleText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const inTransitionRef = useRef(false);

  useEffect(() => {
    let currentText = "";
    let intervalId;

    const startAnimation = () => {
      setVisibleText("");
      const currentTextArray = texts[textIndex].split("");

      intervalId = setInterval(() => {
        if (currentTextArray.length > 0) {
          currentText += currentTextArray.shift();
          setVisibleText(currentText);
        } else {
          clearInterval(intervalId);

          if (repeatLine) {
            setTimeout(() => {
              setVisibleText("");
              setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
              // startAnimation();
            }, transitionDelay);
          } else {
            // Start the blinking animation after the initial animation
            blinkLastLetter();
          }
        }
      }, 40);
    };

    const blinkLastLetter = () => {
      const lastLetter = texts[textIndex].charAt(texts[textIndex].length - 1);
      let isBlinkVisible = true;
      let blinkingText = "";

      const blinkingInterval = setInterval(() => {
        blinkingText = isBlinkVisible
          ? visibleText + lastLetter
          : visibleText.slice(0, -1);
        setVisibleText(blinkingText);

        if (blinkingText.length >= texts[textIndex].length) {
          clearInterval(blinkingInterval);
        }
        isBlinkVisible = !isBlinkVisible;
      }, 1000);
    };

    startAnimation();

    return () => clearInterval(intervalId);
  }, [texts, repeatLine, textIndex, transitionDelay]);

  // Move to the next text in the array when clicked
  const nextText = () => {
    setVisibleText("");
    if (!inTransitionRef.current) {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      inTransitionRef.current = true;
    } else {
      inTransitionRef.current = false;
    }
  };

  return (
    <div className="text-appear" onClick={nextText}>
      {visibleText}
    </div>
  );
};

export default TextAppear;

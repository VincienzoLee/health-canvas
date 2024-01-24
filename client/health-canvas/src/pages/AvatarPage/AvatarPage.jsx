import "./AvatarPage.scss";
import CardiovascularDialogue from "../../components/Dialogue/CardiovascularDialogue/CardiovascularDialogue";
import CancerDialogue from "../../components/Dialogue/CancerDialogue/CancerDialogue";
import TextAppear from "../../js/TextAppear/TextAppear";
import Icon4 from "../../assets/profiles/icon4.gif";
import Avatar2 from "../../assets/avatars/avatar2.png";
import Forest from "../../assets/background/forest-adventure.mp4";
import Heart from "../../assets/icons/heart.gif";
import Cancer from "../../assets/icons/cancer.gif";
import { useState } from "react";

function AvatarPage() {
  const [cardioDialogueVisible, setCardioDialogueVisible] = useState(false);
  const [cancerDialogueVisible, setCancerDialogueVisible] = useState(false);

  const handleCardioClick = () => {
    setCardioDialogueVisible(!cardioDialogueVisible);
    setCancerDialogueVisible(false);
  };

  const handleCancerClick = () => {
    setCancerDialogueVisible(!cancerDialogueVisible);
    setCardioDialogueVisible(false);
  };

  return (
    <section className="avatar-page">
      <video autoPlay muted loop>
        <source src={Forest} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="avatar-page__profile-wrapper">
        <img
          className="avatar-page__picture"
          src={Icon4}
          alt="assistant picture"
        />
        <TextAppear
          texts={[
            "Running Self-Diagnostics...",
            "Click the icons next to your Avatar to get started...",
          ]}
          repeatLine={true}
          transitionDelay={2000}
        />
      </div>
      <div className="avatar-page__avatar-wrapper">
        <img className="avatar-page__avatar" src={Avatar2} />
        <div className="avatar-page__cardio-icon" onClick={handleCardioClick}>
          <img className="avatar-page__icon" src={Heart} alt="heart icon" />
        </div>
        <div className="avatar-page__cancer-icon" onClick={handleCancerClick}>
          <img className="avatar-page__icon" src={Cancer} alt="cancer icon" />
        </div>
        <div
          className={` ${
            cardioDialogueVisible
              ? "avatar-page__cardio-dialogue"
              : "avatar-page__hidden"
          }`}
        >
          {cardioDialogueVisible && <CardiovascularDialogue />}
        </div>

        <div
          className={` ${
            cancerDialogueVisible
              ? "avatar-page__cancer-dialogue"
              : "avatar-page__hidden"
          }`}
        >
          {cancerDialogueVisible && <CancerDialogue />}
        </div>
      </div>
    </section>
  );
}

export default AvatarPage;

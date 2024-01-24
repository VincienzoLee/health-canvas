import "./AlarmPage.scss";
import Alarm from "../../components/Alarm/Alarm";
import TextAppear from "../../js/TextAppear/TextAppear";
import Icon2 from "../../assets/profiles/icon2.gif";

function AlarmPage() {
  return (
    <section className="alarm-page">
      <div className="alarm-page__profile-wrapper">
        <img
          className="alarm-page__picture"
          src={Icon2}
          alt="assistant picture"
        />
        <TextAppear
          texts={[
            "Don't Be Alarmed!",
            "Here, you can organize your schedule by setting alarms!",
            "Exercising, Meditation, Medication... You name it! I'll remind you when it's time.",
          ]}
          repeatLine={true}
          transitionDelay={3000}
        />
      </div>
      <div className="alarm-page__alarm-wrapper">
        <Alarm />
      </div>
    </section>
  );
}

export default AlarmPage;

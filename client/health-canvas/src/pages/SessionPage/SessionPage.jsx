import "./SessionPage.scss";
import TextAppear from "../../js/TextAppear/TextAppear";
import Chatbox from "../../components/Session/Session";
import Office from "../../assets/background/office.gif";
import Icon5 from "../../assets/profiles/icon5.gif";

function SessionPage() {
  return (
    <section className="session-page">
      <div className="session-page__profile-wrapper">
        <img className="session-page__picture" src={Icon5} />
        <TextAppear
          className="session-page__text-appear"
          texts={[
            "How may I help you today? Here, we can discuss common medical problems and see how you are doing.",
            "You can keep track of your symptoms over time and monitor for changes!",
          ]}
          repeatLine={true}
          transitionDelay={5000}
        />
      </div>

      <div className="session-page__wrapper">
        <img className="session-page__background" src={Office} />
        <div className="session-page__chatbox">
          <Chatbox />
        </div>
      </div>
    </section>
  );
}

export default SessionPage;

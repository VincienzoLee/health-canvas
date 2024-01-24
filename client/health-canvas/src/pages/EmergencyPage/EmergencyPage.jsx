import "./EmergencyPage.scss";
import Emergency from "../../components/Emergency/Emergency";
import TextAppear from "../../js/TextAppear/TextAppear";
import Icon3 from "../../assets/profiles/icon3.gif";

function EmergencyPage() {
  return (
    <section className="emergency-page">
      <div className="emergency-page__profile-wrapper">
        <img
          className="emergency-page__picture"
          src={Icon3}
          alt="assistant picture"
        />
        <TextAppear
          texts={[
            "British Columbia Emergency Department Locations & Wait Times...",
            "Vancouver General Hospital primarily sees patients of age 17+    Other hospitals see patients of all ages.",
            "Some hospitals only operate during set hours. Please consult the respective hospital websites.",
          ]}
          repeatLine={true}
          transitionDelay={5000}
        />
      </div>
      <Emergency />
    </section>
  );
}

export default EmergencyPage;

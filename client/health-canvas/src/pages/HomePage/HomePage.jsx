import { Link } from "react-router-dom";
import "./HomePage.scss";
import TextAppear from "../../js/TextAppear/TextAppear";
import Icon1 from "../../assets/profiles/icon1.gif";
import Avatar1 from "../../assets/avatars/avatar1.png";
import Avatar2 from "../../assets/avatars/avatar2.png";
import Avatar3 from "../../assets/avatars/avatar3.png";
import PageTurning from "../../assets/videos/pages-turning.mp4";

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-page__profile-wrapper">
        <img
          className="home-page__picture"
          src={Icon1}
          alt="assistant picture"
        />
        <TextAppear
          texts={[
            "Hello, Welcome to Health Canvas!",
            "Here, we'll help you with various aspects of staying healthy!",
            "Please feel free to explore and inquire..",
            "You can create your personal avatar and get virtual health checkups!",
            "Please note that this app is to be used for educational purposes only..",
            "Let's take charge of our health!",
          ]}
          repeatLine={true}
          transitionDelay={2000}
        />
      </div>
      <section className="home-page__content-wrapper">
        <h1 className="home-page__title">Health Canvas</h1>
        <div className="home-page__text-wrapper-flexbox">
          <div className="home-page__text-wrapper">
            {/* <div className="home-page__video-wrapper">
            <video
              id="videoPlayer"
              className="home-page__video"
              autoPlay
              loop
              muted
            >
              <source src={PageTurning} type="video/mp4" />
              Browser does not support video tag.
            </video>
          </div> */}
            <div className="home-page__subtitle">
              <p className="home-page__text home-page__subheading home-page__bounce2">
                A Fusion of Fun & Function
              </p>
              <p className="home-page__text">
                Combining essential functions to one package
              </p>
            </div>
            <div className="home-page__form-function-wrapper">
              <div className="home-page__fun-wrapper">
                <div className="home-page__text">
                  <span className="home-page__bounce home-page__subheading">
                    The Fun
                  </span>
                </div>
                <p className="home-page__text">
                  - Embark on a journey across mystical lands in your avatar
                </p>
                <p className="home-page__text">
                  - Learn Through Play & Asking Questions
                </p>
              </div>
              {/* <p className="home-page__text">AND</p> */}
              <div className="home-page__function-wrapper">
                <p className="home-page__text">
                  <span className="home-page__bounce home-page__subheading">
                    The Function
                  </span>{" "}
                </p>
                <p className="home-page__text">
                  - Ask About Your Medical Symptoms
                </p>
                <p className="home-page__text">
                  - Log Your Symptoms And Results
                </p>
                <p className="home-page__text">
                  - Set Your Schedule Through Alarms
                </p>
                <p className="home-page__text">
                  - Emergency Department Information At Your Fingertips
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="home-page__text home-page__cta">
          Choose Your Avatar To Start Your Journey
        </p>
        <p className="home-page__text home-page__span">- or - </p>
        <button className="home-page__button">Sign Up</button>
      </section>
      <div className="home-page__avatar-wrapper">
        <Link to="/avatar">
          <img
            className="home-page__avatar"
            src={Avatar1}
            alt="cat-person adventurer avatar "
          />
        </Link>
        <Link to="/avatar">
          <img
            className="home-page__avatar"
            src={Avatar2}
            alt="human adventurer avatar "
          />
        </Link>
        <Link to="/avatar">
          <img
            className="home-page__avatar"
            src={Avatar3}
            alt="human medic avatar "
          />
        </Link>
      </div>
    </section>
  );
}

export default HomePage;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoTransition.scss";
import PageTurning from "../../assets/videos/pages-turning.mp4";

const VideoTransition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const videoDuration = 5000;
    const videoElement = document.getElementById("videoPlayer");

    videoElement.play();

    const timeoutId = setTimeout(() => {
      videoElement.pause();
      videoElement.currentTime = 0;
      navigate("/home");
    }, videoDuration);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="video-wrapper">
      <video
        id="videoPlayer"
        className="video-wrapper__video"
        autoPlay
        loop
        muted
      >
        <source src={PageTurning} type="video/mp4" />
        Browser does not support video tag.
      </video>
    </div>
  );
};

export default VideoTransition;

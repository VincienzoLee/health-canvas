import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AvatarPage from "./pages/AvatarPage/AvatarPage";
import SessionPage from "./pages/SessionPage/SessionPage";
import AlarmPage from "./pages/AlarmPage/AlarmPage";
import EmergencyPage from "./pages/EmergencyPage/EmergencyPage";
import VideoTransition from "./components/VideoTransition/VideoTransition";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <VideoTransition /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/avatar" element={<AvatarPage />} />
        <Route path="/session" element={<SessionPage />} />
        <Route path="/alarm" element={<AlarmPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        {/* <Route path="/avatar/:id" element={<AvatarProfilePage />} /> */}
        <Route path="*" element={<div>404 not found!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

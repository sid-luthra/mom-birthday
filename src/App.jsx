import { useState } from "react";
import "./App.css";
import CandleSet from "./components/CandleSet";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
import ReactAudioPlayer from "react-audio-player";
import tabla from "./assets/tabla.mp3";

function App() {
  const [showCandles, setShowCandles] = useState(true);

  return (
    <div className="app-root">
      {showCandles ? (
        <CandleSet handleNext={() => setShowCandles(false)} />
      ) : (
        <ParallaxProvider>
          <ReactAudioPlayer
            src={tabla}
            autoPlay
            controls
            loop
            controlsList="mute"
            className="audio-player"
          />
          <div className="gallery-container">
            <Hero />
            <Gallery />
          </div>
        </ParallaxProvider>
      )}
    </div>
  );
}

export default App;

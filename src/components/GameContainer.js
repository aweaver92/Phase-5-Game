import React, { useState, useEffect, useRef } from "react";

export default function GameContainer(props) {
  const audioRef = useRef(null);
  const audioSources = [
    "../audio/Main-Theme.mp3",
    "../audio/A-New-Begining.mp3",
    "../audio/Bear-Assassins.mp3",
    "../audio/Caveman-Dinner-Party.mp3",
    "../audio/The-Woods.mp3",
    "../audio/Ghost-Spiders.mp3",
    "../audio/Launchpad-Bossa-Nova.mp3"
  ];
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * 6));
  const randomAudioSource = audioSources[randomIndex];
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    audioRef.current.play();
    audioRef.current.volume = 0.04;
  }, []);

  const handleMuteClick = () => {
    if (isMuted) {
    audioRef.current.play();
    setIsMuted(false);
    } else {
    audioRef.current.pause();
    setIsMuted(true);
    }
    }

  return (
    <div className="Game">
      <audio ref={audioRef} src={randomAudioSource} />

      <canvas id="GameContainer"></canvas>
      <iframe className="iframe" height="100%" width="100%" src="http://127.0.0.1:5500/src/components/game.html"></iframe>
      <div className="interface">
        <img className="health" src="/images/ui/hp-head.png" />
        <img className="health" src="/images/ui/hp-head.png" />
        <img className="health" src="/images/ui/hp-head.png" />
      </div>
      <div id="mute" className="interface-col2">
      <img src={isMuted ? '/images/ui/unmute.jpg' : '/images/ui/mute.jpg'} onClick={handleMuteClick} />
      </div>
      <div className="inventory">
        <img src='/images/ui/inventory.jpg'/>
      </div>
    </div>
  );
}

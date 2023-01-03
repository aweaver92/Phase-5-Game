import React, {useState, useEffect, useRef} from "react";

import parse from 'html-react-parser';

export default function GameContainer(props){

    const baseUrl = "http://localhost:3000/"
    const itemsUrl = baseUrl + "items/"
    const usernamesUrl = baseUrl + "usernames/"

    const audioRef = useRef(null);

    useEffect(() => {
      audioRef.current.play();
      }, []);

    return(
    <div className="Game">
        <audio ref={audioRef} src="../audio/Main Theme.mp3" />

        <canvas id="GameContainer"></canvas>
        <iframe className="iframe" height="100%" width="100%" src="http://127.0.0.1:5500/src/components/game.html"></iframe>

    </div>
    )

}

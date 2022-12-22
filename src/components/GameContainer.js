import React, {useState, useEffect} from "react";
import Game from "./Game";
import Sprite from "./Sprite";

export default function GameContainer(props){

    const baseUrl = "http://localhost:3001/"
    const itemsUrl = baseUrl + "items/"
    const usernamesUrl = baseUrl + "usernames/"
    // useEffect(() => {

    //     let gameContainer = document.getElementById('GameContainer')
    //     console.log(gameContainer, "gamecontainer here")
    //     const script = document.createElement('script');

    //     script.src = "./Game.js";
    //     script.async = true;

    //     if (gameContainer) {
    //         gameContainer.appendChild(script);
    //       }

    //     // return () => {
    //     //   document.body.removeChild(script);
    //     // }
    //   }, []);

    return(
    <div>
        {/* <canvas id="GameContainer"></canvas> */}
        <p>test</p>

        <Game />

        {/* <script src="../../gameData/collisions.js"></script>
        <script src="../public/src/components/Sprite.js"></script>
        <script src="./public/src/components/Game.js"></script> */}
    </div>
    )

}

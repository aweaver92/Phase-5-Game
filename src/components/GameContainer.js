import React, {useState, useEffect} from "react";

export default function GameContainer(props){

    const baseUrl = "http://localhost:3001/"
    const itemsUrl = baseUrl + "items/"
    const usernamesUrl = baseUrl + "usernames/"
    useEffect(() => {

        let gameContainer = document.getElementById('GameContainer')
        console.log(gameContainer, "gamecontainer here")
        const script = document.createElement('script');

        script.src = "./Game.js";
        script.async = true;

        gameContainer.appendChild(script)

        // return () => {
        //   document.body.removeChild(script);
        // }
      }, []);

    return(
    <div>

        <canvas id="GameContainer"></canvas>
        {/* <script src="../../gameData/collisions.js"></script>
        <script src="../classes.js"></script>
        <script src="Game.js"></script> */}
    </div>
    )

}

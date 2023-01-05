import React, {useEffect} from "react";
import { Link } from 'react-router-dom';


export default function Splash(props){

    useEffect(() => {
        console.log(props.username, "username from useEffect");
      }, [props.username]);

    const handleSubmit = (event) => {
    event.preventDefault();
    }
    return(
    <div className="main-content">
        <div className="splashContainer">
        <img id="splashImg" src="images/Splash-Ape.gif" />
            <h1>PANIC OF THE APES</h1>
            <div className="form">
                {/* <form onSubmit={(event) => props.setUsername(event, props.username)}> */}
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => props.setUsername(e.target.value)} id="nameField" type="text" value={props.username} placeholder="INSERT USERNAME" />
                    <div>
                    </div>
                    {/* <button type="submit" id="splashBtn" className="button" >Join Lobby</button> */}
                    <Link type="submit" id="splashBtn" className="button" to="/lobby">JOIN LOBBY</Link>

                </form>

            </div>


        </div>
        </div>
    )
}

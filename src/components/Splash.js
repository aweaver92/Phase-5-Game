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
<>
<div className="space">
</div>
    <div className="main-content">
        <br/>
        <div className="splashContainer">
            <div className="logo-splash">
                <img src="images/logo.png" />
            </div>
            {/* <h1>PANIC OF THE APES</h1> */}
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => props.setUsername(e.target.value)} id="nameField" type="text" value={props.username} placeholder="INSERT USERNAME" />
                    <br/>
                    <Link type="submit" id="splashBtn" className="button" to="/lobby">JOIN LOBBY</Link>
                </form>
            </div>
        </div>
    </div>
</>
    )
}

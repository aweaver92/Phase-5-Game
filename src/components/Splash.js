import React, {useState} from "react";

export default function Splash(props){
    const [username, setName] = useState("")

    return(
    <div className="main-content">
        <div className="splashContainer">
        <img id="splashImg" src="images/splash_sfw.jpg" />
            <h1>PANIC OF THE APES</h1>
            <div className="form">
                <form onSubmit={(event) => props.addName (event, username)}>
                    <input onChange={(e) => setName(e.target.value)} id="nameField" type="text" value={username} placeholder="INSERT USERNAME" />
                    <div>
                    </div>
                    <button type="submit" id="splashBtn" className="button" >Join Lobby</button>

                </form>

            </div>


        </div>
        </div>
    )
}

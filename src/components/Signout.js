import React from "react";

function Signout() {
    return (
    <>
        <div className="navbar">
            <span className="navlink">
                <a href="#">Home</a>
            </span>
        </div>
        <div className="main-container">
            <img id="splashImg" src="images/splash.jpg" />
            <h3 className="white">QUIT MONKEYING AROUND AND GET IN THERE!</h3>
            <span><a href="#">Sign Up</a></span>
            <span><a href="#">Sign In</a></span>
        </div>
    </>
    )
}

export default Signout;

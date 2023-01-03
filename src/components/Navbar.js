import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {

let isSignedIn = props.isSignedIn;
let currentUser = props.currentUser
console.log(currentUser, "currentUser here")
console.log(isSignedIn, "isSignedIn here")

function setSignOut() {
  isSignedIn(false);
  console.log(isSignedIn, "isSignedIn set to false because you clicked Logout button")
}

useEffect(() => {
  console.log(isSignedIn, "isSignedIn from Navbar");
}, [isSignedIn]);

  return (

  <div className="navbar">
  <span className="navlink">
  <Link to="/">Home</Link>
  </span>
  {isSignedIn ? (
  <>
    <span className="navlink">
      <Link to="/my-account">My Account</Link>
    </span>
    <span className="navlink">

     <Link onClick={setSignOut} to="/">Logout</Link>
    </span>
  </>
    ) : (
  <>

    <span className="navlink">
      <Link to="/sign-in">Sign In</Link>
    </span>

  </>
  )}
  </div>
  );
}

export default Navbar;

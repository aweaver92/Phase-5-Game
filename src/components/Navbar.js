import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check if the user is signed in
    const checkSignInStatus = async () => {
      // Placeholder for a Fetch request to check the user's sign in status and update the isSignedIn state accordingly
    };
    checkSignInStatus();
  }, []);

  return (
    <div className="navbar">

        <span className="navlink">
          <a href="/">Home</a>
        </span>
        {isSignedIn ? (
          <span className="navlink">
            <a href="/my-account">My Account</a>
          </span>
        ) : (
          <span className="navlink">
            <a href="/sign-in">Sign In</a>
          </span>
        )}

    </div>
  );
}

export default Navbar;

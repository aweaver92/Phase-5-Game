import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const baseUrl = "http://localhost:3000/"
  const loginUrl = baseUrl + "login"
  const autoLoginUrl = baseUrl + "auto_login"


  // Handle auto login
  // useEffect(() => {
  //   console.log(localStorage.uid, "uid here");
  //   if (localStorage.uid) {
  //     fetch(autoLoginUrl, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'auth-token': localStorage.uid
  //       }
  //     })
  //     .then(r => r.json())
  //     .then(props.setCurrentUser)
  //     .then (props.setIsSignedIn(true))
  //     .catch(() => setError("An error occurred while trying to auto-login."));
  //   } else {
  //     console.log("No user info found.");
  //   }
  // }, []);

  // Handle login
  const login = () => {
  fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(r => r.json())
    .then(({ uid, id }) => {
      localStorage.uid = uid;
      localStorage.id = id;
      console.log(uid, "uid")
      console.log(id, "id")
      props.setCurrentUser(id);
      console.log(props.setCurrentUser(id))
      props.setIsSignedIn(true);
    })
    .catch((e) => console.log(e))
};
  console.log(props.id, "user ID here")


  let [redirect, setRedirect] = useState(false);
  let isSignedIn = props.isSignedIn;


  if (redirect) {
     return <Navigate to="/my-account" />;
  }

  // let setIsSignedIn = props.setIsSignedIn;

  // function toggleSignIn(id) {
  //   if (props.setCurrentUser(id) !== null) {
  //     setIsSignedIn = !setIsSignedIn;
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(isSignedIn, "isSignedIn?")
    login();
    if (!isSignedIn) {
      setRedirect(true);
      console.log(isSignedIn)
    }
  }

  return (
    <div className='signForm'>
      <h3>Sign in here. Or don't. I don't care what you do.</h3>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br/>
        <br/>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit" >Sign In</button>
        <br />
        <p>Don't have an account? <Link className="link" to="/sign-up">Sign Up & Earn In-Game Rewards!</Link></p>
      </form>
    </div>
  );
}

export default SignIn;

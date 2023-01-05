import React, { useState } from 'react';

import { Navigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  let [redirect, setRedirect] = useState(false);
  const baseUrl = "http://localhost:3000/"
  const usersUrl = baseUrl + "users"

  if (redirect) {
    return <Navigate to="/sign-in" />;
 }

const handleSubmit = async (event) => {
    event.preventDefault();

    // Make sure passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Send request to backend to create new user
    try {
      const response = await fetch(usersUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if response is successful
      if (response.ok) {
        // Redirect to login page
        setRedirect(true);
      } else {
        // Extract error message from response
        const { message } = await response.json();
        setError(message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
  <div className='signForm'>
    <h3>Sign up here. Please?</h3>
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
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br/>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </label>
      <br/>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  </div>
  );
}

export default SignUp;

import React, { useState } from 'react';

import { Navigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  let [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to="/sign-in" />;
 }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setRedirect(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='signForm'>
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
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
}

export default SignUp;

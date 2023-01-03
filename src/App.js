// // npm install && rails server -p 3000 && json-server -p 3001 --watch db.json && npm start && sudo service postgresql start

// // sudo service postgresql start

import './App.css';
import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import LobbyPage from "./components/LobbyPage";
import MyAccount from "./components/MyAccount";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Signout from "./components/Signout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  let [currentUser, setCurrentUser] = useState(false)
  let [isSignedIn, setIsSignedIn] = useState(false)
  let [username, setUsername] = useState("")


  const logout =()=> {

    setIsSignedIn(false)
    localStorage.removeItem('uid')
  }

  useEffect(() => {
    console.log(localStorage.uid, 'Local UID here')
  }, [currentUser]);

  function addName(event, newName) {
    event.preventDefault()

    const baseUrl = "http://localhost:3000/"
    const namesUrl = baseUrl + "users"


      let postRequest = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "test_user":newName
        })
      }
    fetch(namesUrl, postRequest)
    .then( r => r.json())
    .then( response => {
      // console.log(response)
      setUsername(newName)
      console.log(newName)
    })
  }

  console.log(setCurrentUser)
  return (
    <div className="App">
      <header>
      <h3>{addName}</h3>

      <Router>
        <Navbar
        currentUser = {currentUser}
        // setCurrentUser = {setCurrentUser}
        isSignedIn = {isSignedIn}
        // setIsSignedIn = {setIsSignedIn}
         logout = {logout}
        />
        <Routes>
          <Route exact path="/" element={<Splash
            setUsername = {setUsername}
            username = {username}
            addName = {addName}
          />
          } />
          <Route path="/my-account"  element={<MyAccount
          currentUser = {currentUser}
          // setCurrentUser = {setCurrentUser}
          isSignedIn = {isSignedIn}
          // setIsSignedIn = {setIsSignedIn}
           logout = {logout}
          />} />
          <Route path="/sign-out"  element={<Signout

          />} />
          <Route path="/sign-in"  element={<SignIn
            setCurrentUser = {setCurrentUser}
            setIsSignedIn = {setIsSignedIn}
            isSignedIn = {isSignedIn}
            logout = {logout}
          />} />
          <Route path="/items"  element={<MyAccount/>} />
          <Route path="/sign-up"  element={<SignUp/>} />
          <Route path="/lobby"  element={<LobbyPage
            username = {username}
            addName = {addName}
          />
          } />
          <Route fallback={<p>Not found</p>} />
        </Routes>
      </Router>
      </header>

    </div>
  );
}

export default App;

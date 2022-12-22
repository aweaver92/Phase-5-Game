// npm install && json-server -p 3001 --watch db.json && npm start

// sudo service postgresql start

// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import LobbyPage from "./components/LobbyPage";
import MyAccount from "./components/MyAccount";
import SignIn from "./components/SignIn";

function App() {
  let [username, setName] = useState('')
  let [showSplash, setShowSplash] = useState(true)

  function addName (event, newName) {
    event.preventDefault()

    const baseUrl = "http://localhost:3000/"
    const namesUrl = baseUrl + "usernames/"

    let postRequest = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "username":newName
      })
    }
    fetch(namesUrl, postRequest)
    .then( r => r.json())
    .then( response => {
      setName(newName)
      setShowSplash(false)
    })
  }

  return (
    <div className="App">
      <header>
      <h3>Welcome {username}</h3>
      <Navbar/>
      </header>
      {
      showSplash ? <Splash
      username = {username}
          addName = {addName}
      /> : <LobbyPage
      username = {username}
      addName = {addName}
      />
      }
      {/* {showSplash && <Splash
          username = {username}
          addName = {addName}
        />
      }
      {!showSplash && <LobbyPage
        username = {username}
        addName = {addName}
      />} */}
    </div>
  );
}

export default App;

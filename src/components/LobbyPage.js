import React, {useState, useEffect} from 'react';
import { useTimer } from 'use-timer';
import GameContainer from './GameContainer';


function LobbyPage(props) {
    let [username, setName] = useState('')
    let [showSplash, setShowSplash] = useState(true)
    let [showGameContainer, setShowGameContainer] = useState(false)

    function addName (event, newName) {
      event.preventDefault()

      const baseUrl = "http://localhost:3001/"
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
    //*** TIMER START ***/
    const { time, start, pause, reset, status } = useTimer();
    //this function gets called every second
    // useEffect(() => [time, console.log(time)])
    //*** TIMER STOP */

    function startBtn() {
        // const url = 'http://127.0.0.1:5500/game.html';
        // window.open(url, '_blank');
        document.querySelector('.hideClick').classList.add('hidden');
        document.querySelector('.sidebar').classList.add('hidden');
        document.querySelector('.timer').classList.remove('hidden');
        document.querySelector('.main-content').classList.add('hidden');

      }

      function apeSelected_default() {
        document.querySelector('.filter-default').classList.add('grey');
        document.querySelector('.filter-default').classList.remove('filter-default');
      }

      function apeSelected_green() {
        document.querySelector('.filter-green').classList.add('grey');
        document.querySelector('.filter-green').classList.remove('filter-green');
      }

      function apeSelected_pink() {
      document.querySelector('.filter-pink').classList.add('grey');
      document.querySelector('.filter-pink').classList.remove('filter-pink');
      }

      function apeSelected_blue() {
      document.querySelector('.filter-blue').classList.add('grey');
      document.querySelector('.filter-blue').classList.remove('filter-blue');
      }

      function renderGameContainer() {
        setShowGameContainer(true)
        }

      //*** Inventory START ***
    //set state for Inventory
    // const [showInventory, setShowInventory] = useState(false)

    //toggle true and false on click
    // const handleInventory = (e) => {
    //     setShowInventory((showInventory) => (!showInventory))
    // }

    // const [itemsState, setItemsState] = useState([])
    // useEffect(() => fetchItems(), [])

    // function fetchItems() {
    //     fetch(itemsUrl)
    //     .then(resp => resp.json())
    //     .then(items => setItemsState(items))
    // }
    //*** Inventory STOP ***


    return(
    <div>

        <p className='timer hidden'>{time}</p>
            <div className="sidebar">
                <div className="playersBox">
                    <strong>PLAYERS:</strong><br/>
                    <h1>{username}</h1>
                </div>
            </div>
            <div className="main-content">
                <h3 className="white">Choose an Ape</h3>
                <img onClick={ () => {
            {apeSelected_default()}
            }} className="apeSelector filter-default" src="images/AK-Monkeh.gif"></img>
                <img onClick={ () => {
            {apeSelected_green()}
            }} className="apeSelector filter-green" src="images/AK-Monkeh.gif"></img>
                <img onClick={ () => {
            {apeSelected_pink()}
            }} className="apeSelector filter-pink" src="images/AK-Monkeh.gif"></img>
                <img onClick={ () => {
            {apeSelected_blue()}
            }} className="apeSelector filter-blue" src="images/AK-Monkeh.gif"></img>
            </div>
            <div className='hideClick'>
            <button onClick={ () => {
            start();
            startBtn();
            renderGameContainer();
            }}>Start Match</button>
        </div>
            <div className='gameContainer'>
            {showGameContainer ? <GameContainer
            username = {username}/> : null}
{/*
{
      showSplash ? <Splash
      username = {username}
          addName = {addName}
      /> : <LobbyPage
      username = {username}
      addName = {addName}
      />
      } */}
            </div>
    </div>
)}

export default LobbyPage;

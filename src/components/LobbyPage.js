import React, {useState} from 'react';
import { useTimer } from 'use-timer';
import GameContainer from './GameContainer';


function LobbyPage(props) {
    let [showSplash, setShowSplash] = useState(true)
    let [showGameContainer, setShowGameContainer] = useState(false)

    console.log(props.username, "username here")
    //*** TIMER START ***/

    const { time, start, pause, reset, status } = useTimer({
      initialTime: 180,
      timerType: 'DECREMENTAL',
      endTime: 0,
    });

    function startBtn() {
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

    async function sendUsername() {

      const baseUrl = "http://localhost:3000/"
      const namesUrl = baseUrl + "user"
      const username = "my_username";

      try {
        const response = await fetch(namesUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        });
        const data = await response.json();
        console.log(data, "is the username sent to back end db.");
      } catch (error) {
        console.error(error, "There was an error fetching username");
      }
    }

    const apiFetch =()=> {
      const responseContainer = document.getElementById('response-container');

      fetch('http://localhost:3000/jokes')
        .then(r => r.json())
        .then(response => {
          responseContainer.innerHTML = response.joke;
        });
    }

    return(
    <div>
      <div className="space">
      </div>
            <div className="sidebar">
                <div className="playersBox">
                    <strong>PLAYERS IN LOBBY:</strong><br/>
                    <h3 className='blinker'>{props.username}</h3>
                    <h3>Awaiting Player 2</h3>
                    <h3>Awaiting Player 3</h3>
                    <h3>Awaiting Player 4</h3>
                </div>
            </div>
            <div className="main-content">
                <h3 className="white">Choose an Ape. Punk.</h3>
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
            sendUsername();
            start();
            startBtn();
            renderGameContainer();
            }}>Start Match</button>
            <button onClick={apiFetch}>Waiting? Tell a Joke</button><br/>
            <h5 id='response-container'></h5>
        </div>
            <div className='gameContainer'>
            {showGameContainer ? <GameContainer
            username = {props.username}/> : null}

            </div>
            <p className='timer hidden'>{time}</p>
    </div>
)}

export default LobbyPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios'

function MyAccount() {
const [items, setItems] = useState([]);
const [equippedItems, setEquippedItems] = useState([]);
const baseUrl = "http://localhost:3000/";
const itemsUrl = baseUrl + "items";

const [posts, setPosts] = useState([])
useEffect(() => {
axios.get(itemsUrl)
.then(res => {
console.log(res, "res")
setItems(res.data);
})
.catch(err => {
console.error(err);
});
}, []);

const handleEquip = (item) => {
setEquippedItems([...equippedItems, item]);
setItems(items.filter((i) => i !== item));
};

const handleUnequip = (item) => {
setEquippedItems(equippedItems.filter((i) => i !== item));
setItems([...items, item]);
};

return (
<div className='myAccount'>
  <h2>My Account</h2>

  <div className='right-column-1-3'>
  <h3>Unlocked Abilities:</h3>
    <span className='ability'>
      <h5>Dodge</h5>
      <img className='abilities' src="images/dodge.gif" /><p>Press "e" to Dodge</p>
    </span>
    <span className='ability'>
      <h5>Banana Bunch</h5>
      <img className='abilities' src="images/banana_bunch.png" /><p>Start with 3 Bananas</p>
    </span>

  </div>
  <br/>
  <div className='left-column-2-3'>
  <h3>Unlocked Items:</h3>
  <h5><em>(Its dangerous to go alone, take one of these)</em></h5>
  <ul>
    {items.map(item => (
    <li>
    <h4 key={item.id}><span onClick={() => handleEquip(item)}>{item.name}:</span></h4>
    <p>{item.description}</p>
    </li>
    ))}
  </ul>
  <h3>Equipped Items:</h3>
  <ul>
    {equippedItems.map((item) => (
    <li key={item.id}>
    {item.name}
    <button onClick={() => handleUnequip(item)}>Unequip</button>
    </li>
    ))}
  </ul>
  </div>
</div>
);
}

export default MyAccount;

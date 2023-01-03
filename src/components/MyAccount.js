import React, { useState, useEffect } from 'react';
import axios from 'axios'

function MyAccount(props) {
  const [items, setItems] = useState([]);
  const [equippedItems, setEquippedItems] = useState([]);
  const baseUrl = "http://localhost:3000/";
  const itemsUrl = baseUrl + "items";
  const currentUser = props.currentUser
  console.log(currentUser, "currentUser here from myAccount")

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
  };

  const handleUnequip = (item) => {
    setEquippedItems(equippedItems.filter((i) => i !== item));
  };

  return (
    <div>
      <h2>My Account</h2>
      <h3>Equipped Items:</h3>
      <ul>
        {equippedItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUnequip(item)}>Unequip</button>
          </li>
        ))}
      </ul>
      <h3>All Items:</h3>
      <ul>
      {items.map(item => (

        <p key={item.id}>{item.name}:{item.description}</p>
      ))}
        {/* {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEquip(item)}>Equip</button>
          </li>
        ))} */}
      </ul>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    </div>
  );
}

export default MyAccount;

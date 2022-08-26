import React from 'react'
import MenuItem from './MenuItem'
import { useState, useEffect } from 'react';

function Home() {
  
  const [data, setData] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
 

  useEffect(() => {
    fetch("https://foodbukka.herokuapp.com/api/v1/menu")
      .then((response) => response.json())
      .then((data) => {
        setData(data.Result);

      });
  }, []);


  useEffect(() => {
    setMenuItems(data)
   

  }, [data])


  return (

    <>
  
    <div>
    
    <MenuItem menuItems={menuItems}/>

    </div>
    
    </>
  )
}

export default Home
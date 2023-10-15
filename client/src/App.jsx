import React from 'react';
import Reservation from './assets/components/Reservation';
import { useState, useEffect } from 'react';

const App = () => {

  const [reservations, setReservations] = useState([]);

  const serverURL = import.meta.env.VITE_SERVER_URL;
  console.log(serverURL);
  
  useEffect(()=>{
    const fetchReservations = async() =>{
      const response = (await fetch(serverURL));
      const allReservations = await response.json()
      
      setReservations(allReservations.data);

      return;

    };

    fetchReservations();
  },[]);
  
  return (
    <>
    {
      reservations.length === 0 ? <p> There are no reservations... </p>: reservations.map(e => {
        return(
          <div key={e.id}>
            <p>name: {e.name} </p>
            <p>date: {e.date} </p>
            <p>time: {e.time} </p>
            <p>guests: {e.guests} </p>
          </div>
        )

      }

      )
    }
    </>
  
  );
};

export default App;
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({
    title: "",
    description: "",
  });

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  // HOOK
  // Manejar efectos laterales (procesos asíncronso)
  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch(serverUrl);
      const allReservations = await response.json();

      setReservations(allReservations.data);

      return;
    };

    fetchReservations();
  }, []);

  const handleSubmit = (e, data) => {
    e.preventDefault();

    console.log("data", data);

    const sendData = async () => {
      const response = await fetch(serverUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      const successData = await response.json();
      console.log("successData", successData);

      setReservations(successData.data);
    };

    sendData();
  };

  const handleChange = (e) => {
    setNewReservation({
      ...newReservation,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>

      
      <div className="dou">
        <form
          style={{ display: "flex" }}
          onSubmit={(e) => handleSubmit(e, newReservation)}
          className="jump"
        >
          <div>
            <label>Name</label>
            <input
              name="name"
              type="text"
              onChange={(e) => handleChange(e)}
              value={newReservation.title}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              name="date"
              type="date"
              placeholder="select Date "
              onChange={(e) => handleChange(e)}
              value={newReservation.title}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              name="time"
              type="time"
              placeholder="select time"
              onChange={(e) => handleChange(e)}
              value={newReservation.title}
            />
          </div>

          <div>
            <label>Guests</label>
            <input
              name="guests"
              type="number"
              
              onChange={(e) => handleChange(e)}
              value={newReservation.title}
            />
          </div>

          <button>Crear reservación</button>
        </form>
      </div>
      <div>

        
      </div>
      <div>
      {reservations.length === 0 ? (
        <p>No hay reservaciones...</p>
      ) : (
        reservations.map((e) => {
          return (
            <div key={e.id}>
              <h1>{e.name}</h1>
              <p>Date: {e.description}</p>
              <h1>{e.date}</h1>
              <p>Time: {e.description}</p>
              <h1>{e.time}</h1>
              <p>Name: {e.description}</p>
              <h1>{e.guests}</h1>
              <p>Guests: {e.description}</p>
            </div>
            
            
          );
        })
      )}
      </div>
      
    </>
  );
}


export default App;
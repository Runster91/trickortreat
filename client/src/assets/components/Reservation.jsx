import React, { useState } from 'react';

const Reservation = () => {
  const [reservation, setReservation] = useState({
    name: '',
    date: '',
    time: '',
    guests: ''
  });

  const [reservations, setReservations] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      const updatedReservations = [...reservations];
      updatedReservations[currentIndex] = reservation;
      setReservations(updatedReservations);
      setEditing(false);
      setCurrentIndex(null);
    } else {
      setReservations([...reservations, reservation]);
    }
    setReservation({
      name: '',
      date: '',
      time: '',
      guests: ''
    });
  };

  const handleEdit = (index) => {
    setReservation(reservations[index]);
    setEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    const updatedReservations = [...reservations];
    updatedReservations.splice(index, 1);
    setReservations(updatedReservations);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" onChange={handleChange} value={reservation.name} />
        <input name="date" type="date" onChange={handleChange} value={reservation.date} />
        <input name="time" type="time" onChange={handleChange} value={reservation.time} />
        <input name="guests" type="number" placeholder="Number of guests" onChange={handleChange} value={reservation.guests} />
        <button type="submit">{editing ? 'Update' : 'Reserve'}</button>
      </form>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            {reservation.name}, {reservation.date}, {reservation.time}, {reservation.guests}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservation;
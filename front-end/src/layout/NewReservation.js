import React, { useState } from "react";
import { createReservation } from "../utils/api";
import { Link, useHistory } from "react-router-dom";

function NewReservation() {
  const history = useHistory();
//   const [reservation, setReservation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dateOfReservation, setDateOfReservation] = useState("");
  const [timeOfReservation, setTimeOfReservation] = useState("");
  const [partySize, setPartySize] = useState(1); // i tried to make this mandate that party size cannot be < 1 ... it did not work


  const handleSubmit = async (e) => {
    e.preventDefault();
    // CONSOLE LOG HERE
    console.log('Wow such submission')
    console.log("First name:", firstName)
    console.log("Last name:", lastName)
    console.log("Mobile number:", mobileNumber)
    console.log("Reservation date:", dateOfReservation)
    console.log("Reservation time:", timeOfReservation)
    console.log("Party size:", partySize)

    const reservationObj = {
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobileNumber,
        dateOfReservation: dateOfReservation,
        timeOfReservation: timeOfReservation,
        partySize: partySize // must be at least 1
    };

    const newReservation = await createReservation(reservationObj);
    newReservation.reservations = [];

    history.push(`/dashboard/${reservationObj}`);
  };

//   const handleNewReservation = (e) => {
//     setReservation(e.target.value);
//   };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };
  const handleDateOfReservation = (e) => {
    setDateOfReservation(e.target.value);
  };
  const handleTimeOfReservation = (e) => {
    setTimeOfReservation(e.target.value);
  };
  const handlePartySize = (e) => {
    setPartySize(e.target.value);
  };
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Reservation
          </li>
        </ol>
      </nav>

      <h2>Create Reservation</h2>

      <form>
        <div className="mb-3">
          <input
          name="first_name"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="First name"
            onChange={handleFirstName}
          ></input>
          <input
          name="last_name"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Last name"
            onChange={handleLastName}
          ></input>
          <input
          name="mobile_number"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Mobile number"
            onChange={handleMobileNumber}
          ></input>
          <input
          name="reservation_date"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Date of reservation"
            onChange={handleDateOfReservation}
          ></input>
          <input
          name="reservation_time"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Time of reservation"
            onChange={handleTimeOfReservation}
          ></input>
          <input
          name="people"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Party size (must be 1 or more)"
            onChange={handlePartySize}
          ></input>
        </div>

        <Link to="/" className="btn btn-secondary">
          {``} {``} Cancel
        </Link>
        <button onClick={handleSubmit} className="btn btn-primary">
          {``} {``} Submit
        </button>
      </form>
    </div>
  );
}

export default NewReservation;

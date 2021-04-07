import React, { useState } from "react";
import { createReservation } from "../utils/api";
import { Link, useHistory } from "react-router-dom";

// create NewReservation component
function NewReservation() {
  const history = useHistory();
  //   const [reservation, setReservation] = useState("");
  // create a state for each field to be submitted
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dateOfReservation, setDateOfReservation] = useState("");
  const [timeOfReservation, setTimeOfReservation] = useState("");
  const [partySize, setPartySize] = useState(1); // i tried to make this mandate that party size cannot be < 1 ... it did not work




  // click handler for Submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    // CONSOLE LOG BLOCK TO VERIFY SUBMIT IS WORKING
    console.log("Wow such submission");
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Mobile number:", mobileNumber);
    console.log("Reservation date:", dateOfReservation);
    console.log("Reservation time:", timeOfReservation);
    console.log("Party size:", partySize);

    // a single new reservation should be pushed to /dashboard upon Submit
    const reservationObj = {
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      dateOfReservation: dateOfReservation,
      timeOfReservation: timeOfReservation,
      partySize: partySize, // must be at least 1
    };

    const newReservation = await createReservation(reservationObj);
    newReservation.dashboard = [];

    history.push(`/dashboard/${reservationObj}`);
  };

  //   const handleNewReservation = (e) => {
  //     setReservation(e.target.value);
  //   };

  // this block addresses Submit click functionality for each altered individual input

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
    // breadcrumb nav links atop the page with routing to dashboard
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Reservation
          </li>
        </ol>
      </nav>

      <h2>Create Reservation</h2>
      {/* a form with a field for each key in reservationObj; each field is contained within an input with its own label */}
      <form>
        <div class="mb-3">
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            First name:
          </label>
          <input
            name="first_name"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Input first name (mandatory)"
            onChange={handleFirstName}
          ></input>
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            Last name:
          </label>
          <input
            name="last_name"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Input last name (mandatory)"
            onChange={handleLastName}
          ></input>
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            Mobile number:
          </label>
          <input
            name="mobile_number"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="###-###-####"
            onChange={handleMobileNumber}
          ></input>
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            Date:
          </label>
          <input
            name="reservation_date"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            type="date"
            placeholder="YYYY-MM-DD"
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={handleDateOfReservation}
          ></input>
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            Time:
          </label>
          <input
            name="reservation_time"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            type="time"
            placeholder="HH:MM"
            pattern="[0-9]{2}:[0-9]{2}"
            onChange={handleTimeOfReservation}
          ></input>
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            Party size:
          </label>
          <input
            name="people"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="# (default to 1 if left blank)"
            onChange={handlePartySize}
          ></input>
        </div>
        {/* Cancel and Submit buttons with appropriate routing */}
        {/* first cancel button syntax */}
        <Link to="/" class="btn btn-outline-danger">
          Cancel • Test Button Syntax 1 • Go to dashboard
        </Link>
        {``} {``} {``} {``}
        {/* second cancel button syntax; which of the two is appropriate here? */}
        <a class="btn btn-outline-danger" href="/" role="button">
          Cancel • Test Button Syntax 2 • Go to dashboard
        </a>
        {``} {``} {``} {``}
      
{/* below is experimental dialog prompt to confirm cancel */}

        {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal">
  Cancel • Pop-up Test Button 1 • Confirmation required
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cancel Reservation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Cancel reservation and return to Dashboard? This cannot be undone.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
        <a role="button" href="/"type="button" class="btn btn-outline-success">Cancel reservation</a>
      </div>
    </div>
  </div>
</div>
{``} {``} {``} {``}
  {/* this submit button has two types, how to make this clearer? does it matter? */}
  <button
          type="button"
          onClick={handleSubmit}
          class="btn btn-outline-success"
        >
          Submit
        </button>
        {``} {``} {``} {``}

      </form>
    </div>
  );
}

export default NewReservation;

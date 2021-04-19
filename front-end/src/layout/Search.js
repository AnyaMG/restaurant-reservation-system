import React, { useState } from "react";
import { createReservation } from "../utils/api";
import { formatAsDate, today } from "../utils/date-time";
import { Link, useHistory } from "react-router-dom";
import ReservationError from "./ReservationError";

function Search() {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Search
          </li>
        </ol>
      </nav>
      <h2>Mobile search:</h2>

      <form>
        <input
          name="capacity"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter a customer's phone number"
        //   onChange=
          required
        ></input>

        {/* Cancel and Submit buttons with appropriate routing */}
        <button  className="btn btn-outline-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Search;

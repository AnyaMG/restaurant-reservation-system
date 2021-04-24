import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { assignReservationStatus } from "../utils/api";


const ReservationCard = ({ reservation, table }) => {
const [status, setStatus] = useState("booked")

    // const returnedStatus = assignReservationStatus(reservation.status);
    // if (returnedStatus) loadDashboard();

    // add in changeToSeated handler
    

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{reservation.first_name} {reservation.last_name}</h5>
                <p className="card-text">
                    Mobile Number: {reservation.mobile_number}
                    <br/>
                    Date: {reservation.reservation_date}
                    <br/>
                    Time: {reservation.reservation_time}
                    <br/>
                    People: {reservation.people}
                    <br/>
                    <h7 data-reservation-id-status={reservation.reservation_id}
>Status: {reservation.status}</h7>



      
{/* The SEAT button needs to have a show/hide toggle and only be displayed when  status is "booked" ; onClick when Seat button is clicked, STATUS should change to "seated" and hide the Seat button. After that part, the FINISH button should be activated with a dialog prompt.*/}

                </p>
                {reservation.status === "booked" ? <Link
                    to={`/reservations/${reservation.reservation_id}/seat`}
                    href={`/reservations/${reservation.reservation_id}/seat`}
                    className="btn btn-outline-success btn-lg btn-block">
                    Seat
                </Link> : null}

            </div>
        </div>
    )
}

export default ReservationCard;
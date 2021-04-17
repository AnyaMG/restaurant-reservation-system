import React from 'react';
import { Link } from 'react-router-dom';

const ReservationCard = ({ reservation }) => {
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

{/* The SEAT button needs to have a show/hide toggle and only be displayed when  status is "booked" ; onClick when Seat button is clicked, STATUS should change to "seated" and hide the Seat button. After that part, the FINISH button should be activated with a dialog prompt.*/}
                </p>
                <Link
                    to={`/reservations/${reservation.reservation_id}/seat`}
                    href={`/reservations/${reservation.reservation_id}/seat`}
                    className="btn btn-outline-success btn-lg btn-block">
                    Seat
                </Link>

            </div>
        </div>
    )
}

export default ReservationCard;
import React from 'react'

const ReservationCard = ({ reservation }) => {
    console.log(reservation);
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
                </p><a href="/reservations/${reservation_id}/seat" className="btn btn-outline-success btn-lg btn-block">Seat</a>

            </div>
        </div>
    )
}

export default ReservationCard;
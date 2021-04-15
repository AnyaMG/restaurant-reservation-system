import React from "react";


const TableCard = ({ table }) => {
  console.log(table);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
        </h5>
        <p className="card-text">
        Table name: {table.name}
          Capacity: {table.capacity}
       
        </p>
        <a
          href="/reservations/${reservation_id}/seat"
          className="btn btn-outline-success btn-lg btn-block"
        >
          Seat
        </a>
      </div>
    </div>
  );
};

export default TableCard;

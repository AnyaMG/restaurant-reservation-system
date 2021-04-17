import React from "react";


const TableCard = ({ table }) => {
  console.log(table);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Name: {table.name}
        </h5>
        <p className="card-text">
          Capacity: {table.capacity}
       
        </p>
        
          Status of FREE or OCCUPIED should be displayed. 

          IF status=occupied display FINISH button. FINISH button to launch dialog "Is this table ready to seat new guests? This cannot be undone." No changes on cancel.
        
      </div>
    </div>
  );
};

export default TableCard;

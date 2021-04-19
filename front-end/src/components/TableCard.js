import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteTable } from "../utils/api";

const TableCard = ({ table }) => {
const history = useHistory();
// const [remainingTables, setRemainingTables] = useState("");

  const finishTable = async () => {
    if (
      window.confirm("Is this table ready to seat new guests? \n\n This cannot be undone.")
    ) {
      
      await deleteTable(table.table_id); 
      window.location.reload();
      // we are not actually deleting a table, just resetting status
       // added this in 
      history.push("/");
    }
  };

  return (
    <div
      className="card"
      style={{ width: "18rem" }}
      
    >
      <div className="card-body">
        <h5 className="card-title">Name: {table.table_name}</h5>
        <h5 className="card-text">Capacity: {table.capacity}</h5>
        <h5 className="card-text" data-table-id-status={table.table_id}>Status: {table.occupied ? "Occupied" : "Free"}</h5> 

        {table.occupied ? 
          (<button className="btn btn-outline-success btn-lg btn-block" data-table-id-finish={table.table_id} onClick={finishTable}>Finish
        </button>) : null
        }
      </div>
    </div>
  );
};

export default TableCard;

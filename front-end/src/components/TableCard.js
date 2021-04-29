import React from "react";
import { deleteTable} from "../utils/api";

const TableCard = ({ table, loadDashboard }) => {

  const finishTable = async (e) => {
    e.preventDefault();
    if ( 
      window.confirm(
        "Is this table ready to seat new guests? \n\n This cannot be undone."
      )
    ) {
      const returnedTable = await deleteTable(table.table_id);

      if (returnedTable) loadDashboard();
    }
  };



  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Name: {table.table_name}</h5>
        <h5 className="card-text">Capacity: {table.capacity}</h5>
        <h5 className="card-text" data-table-id-status={table.table_id}>
          Status: {table.reservation_id ? "occupied" : "free"}
        </h5>

        {table.reservation_id ? (
          <button
            className="btn btn-outline-success btn-lg btn-block"
            data-table-id-finish={table.table_id}
            onClick={finishTable}
          >
            Finish
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TableCard;

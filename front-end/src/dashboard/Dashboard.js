import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listReservations, listTables } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

import ReservationCard from "../components/ReservationCard";
import TableCard from "../components/TableCard";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState(null);

  const history = useHistory();

  const query = new URLSearchParams(history.location.search).get("date");

  if (query) {
    date = query;
  }

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
      listTables(abortController.signal)
    .then(setTables)
    .catch(tablesError, setTablesError)
    return () => abortController.abort();
  }

  return (
    <main>
      <nav className="mt-3" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <h3>Dashboard</h3>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <h3>{date}</h3>
          </li>
        </ol>
      </nav>
      {/* <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Schedule for {date}</h4>
      </div> */}
      <ErrorAlert error={reservationsError} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h5>Reservations</h5>
            {reservations.map((reservation) => {
              return (
                <ReservationCard
                  key={reservation.reservation_id}
                  reservation={reservation}
                />
              );
            })}



            
          </div>
          <div className="col">
            <h5>Tables</h5>
            {tables.map((table) => {
              return (
                <TableCard
                  key={table.table_id}
                  table={table}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;

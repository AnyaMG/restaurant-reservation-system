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
function Dashboard({ date }) { // don't pass date, try creating state for date
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

  //   //function previousDay(){
  //   };
  //   //function currentDay([date]){
  // };
  //   //function nextDay(){
  //   };

  function loadDashboard() { // consider reloading on seat or on table change rather than just date
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    listTables(abortController.signal)
      .then(setTables)
      .catch(tablesError, setTablesError);
    return () => abortController.abort();
  }

  return (
    <main>
      <nav className="mt-3" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <h3>Dashboard</h3>
          </li>
          <li class-name="breadcrumb-item"></li>
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
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <a href="#" type="button" role="button" class="btn btn-outline-info">
                Previous
              </a>
              <a href={`/reservations/`} type="button" role="button" class="btn btn-info">
                Today
              </a>
              <a href="#" type="button" role="button" class="btn btn-outline-info">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>

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
              return <TableCard key={table.table_id} table={table} loadDashboard={loadDashboard} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;

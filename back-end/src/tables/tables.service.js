const knex = require("../db/connection");

// function list(date) {
//   return knex("reservations")
//           .select("*")
//           .where({ "reservation_date": date })
//           .orderBy("reservation_time", "asc");
// }

function create(newTable) {
    return knex("tables")
            .insert(newTable)
            .returning(['first_name', 'last_name', 'mobile_number', 'people', 'reservation_date', 'reservation_time']);
}

module.exports = {
  list, create,
};
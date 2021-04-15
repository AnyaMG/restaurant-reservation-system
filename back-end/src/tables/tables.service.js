const knex = require("../db/connection");

function list() {
  return knex("tables")
          .select("*")
          .orderBy("table_name", "asc");
}

function update(newTable) {
    return knex("tables")
            .insert(newTable)
            .returning(['name', 'capacity']);
}

module.exports = {
  list, update,
};
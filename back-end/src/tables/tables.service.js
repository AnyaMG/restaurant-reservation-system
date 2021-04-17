const knex = require("../db/connection");

function list() {
  return knex("tables")
          .select("*")
          .orderBy("table_name", "asc");
}

function update(updatedTable) {
    return knex("tables")
            .update(updatedTable)
            .where({"table_id": updatedTable.table_id})
            .returning("*");
}

function read(tableId) {
  return knex("tables")
            .select("*")
            .where({ "table_id": tableId })
            .first();
}

function create(newTable) {
  return knex("tables")
            .insert(newTable)
            .returning("*");
} 

module.exports = {
  list, update, read, create
};
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const tablesService = require("./tables.service");
const express = require("express");
const app = express();

/**
 * List handler for reservation resources
 */

async function list(req, res) {
  const { date } = req.query;
  tablesService
  .list(date)
  .then((data) =>
  res.json({ data: data }))
}


async function update(req, res) {
  console.log(req.body)
  update
  .create(req.body.data)
  .then((data) =>
    res.status(201).json({ data: data[0] })
  );
  async function nameValidator(req, res, next) {
    if (!table_name || table_name.length < 1) {
      return next();

      

    }
  next({
    status: 400,
    message: "Table name must include at least 2 letters!"
  })
  }
}

module.exports = {
  list: [asyncErrorBoundary(list)],
 
  // create: [asyncErrorBoundary(validateNewReservation), asyncErrorBoundary(dateValidator), asyncErrorBoundary(timelineValidator), asyncErrorBoundary(create)],
  create: [(asyncErrorBoundary(create)), asyncErrorBoundary(nameValidator)],
};

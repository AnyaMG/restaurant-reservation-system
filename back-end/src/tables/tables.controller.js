const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const tablesService = require("./tables.service");
const express = require("express");
const app = express();

/**
 * List handler for reservation resources
 */

async function list(req, res) {
  tablesService.list().then((data) => {
    console.log(data)


    res.json({ data: data })});
}

async function update(req, res) {
  console.log(req.body);
  tablesService
    .update(req.body.data)
    .then((data) => res.status(201).json({ data: data[0] }));

  async function nameValidator(req, res, next) {
    if (!table_name || table_name.length < 1) {
      return next();
    }
    next({
      status: 400,
      message: "Table name must include at least 2 letters!",
    });
  }
}

module.exports = {
  list: [asyncErrorBoundary(list)],

  // create: [asyncErrorBoundary(validateNewReservation), asyncErrorBoundary(dateValidator), asyncErrorBoundary(timelineValidator), asyncErrorBoundary(create)],
  update: [asyncErrorBoundary(update)],
};

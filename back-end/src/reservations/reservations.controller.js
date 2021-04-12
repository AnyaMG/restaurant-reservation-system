const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const reservationsService = require("./reservations.service");
const express = require("express");
const app = express();

/**
 * List handler for reservation resources
 */

async function list(req, res) {
  const { date } = req.query;
  reservationsService
  .list(date)
  .then((data) =>
  res.json({ data: data }))
}


async function create(req, res) {
  console.log(req.body)
  reservationsService
  .create(req.body.data)
  .then((data) =>
    res.status(201).json({ data: data[0] })
  );
  // async function nameValidator(req, res, next) {
  //   if (!res.first_name && !res.first_name.length) {
  //     return next();
  //   }
  // next({
  //   status: 400,
  //   message: "Must include first name!"
  // })
  // }
}

module.exports = {
  list: [asyncErrorBoundary(list)],
 
  // create: [asyncErrorBoundary(validateNewReservation), asyncErrorBoundary(dateValidator), asyncErrorBoundary(timelineValidator), asyncErrorBoundary(create)],
  create: [(asyncErrorBoundary(create))],
};

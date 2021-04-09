const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const reservationsService = require("./reservations.service");

/**
 * List handler for reservation resources
 */


async function list(req, res) {
  const { date } = req.query;
  reservationsService
  .list(date)//list the reservations for today SOMETIME LATER THO
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
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  // read: [asyncErrorBoundary(checkId), asyncErrorBoundary(read)],
  // create: [asyncErrorBoundary(validateNewReservation), asyncErrorBoundary(dateValidator), asyncErrorBoundary(timelineValidator), asyncErrorBoundary(create)],
  create: [asyncErrorBoundary(create)]
};

const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const reservationsService = require("./reservations.service");
/**
 * List handler for reservation resources
 */


async function list(req, res) {
  reservationsService
  .list()
  .then((data) =>
  res.json({ data: data }))
}

async function create(req, res) {
  reservationsService
  .create()
  .then((data) =>
  res.json({ data: [] }))
}


module.exports = {
  list, create: asyncErrorBoundary(create) 
};

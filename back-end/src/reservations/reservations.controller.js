const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const reservationsService = require("./reservations.service");
const express = require("express");
const app = express();

/**
 * List handler for reservation resources
 */

async function list(req, res) {
  const { date } = req.query;
  reservationsService.list(date).then((data) => res.json({ data: data }));
}

async function create(req, res) {
  console.log(req.body);
  reservationsService
    .create(req.body.data)
    .then((data) => res.status(201).json({ data: data[0] }));
}

async function firstNameValidator(req, res, next) {
  console.log(req.body);
  if (req.body.data.first_name && req.body.data.first_name.length > 0) {
    return next();
  }
  next({
    status: 400,
    message: "Must include valid first_name!",
  });
}

async function lastNameValidator(req, res, next) {
  console.log(req.body);
  if (req.body.data.last_name && req.body.data.last_name.length > 0) {
    return next();
  }
  next({
    status: 400,
    message: "Must include valid last_name!",
  });
}

async function mobileNumberValidator(req, res, next) {
  console.log(req.body);
  if (req.body.data.mobile_number && req.body.data.mobile_number.length > 0) {
    return next();
  }
  next({
    status: 400,
    message: "Must include valid mobile_number!",
  });
}

async function reservationDateValidator(req, res, next) {
  console.log(req.body);
  if (req.body.data.reservation_date && req.body.data.reservation_date.match(/\d{4}\-\d{2}\-\d{2}/g)) {
    return next();
  }
  next({
    status: 400,
    message: "Must include valid reservation_date!",
  });
}




async function reservationTimeValidator(req, res, next) {
  console.log(req.body);
  if (
    req.body.data.reservation_time &&
    req.body.data.reservation_time.match(/[0-9]{2}:[0-9]{2}/g)
  ) {
    return next();
  }
  next({
    status: 400,
    message: "Must include valid reservation_time!",
  });
}

async function peopleValidator(req, res, next) {
  console.log(req.body);
  if (
    req.body.data.people &&
  typeof req.body.data.people === "number" &&
    req.body.data.people > 0
  ) {
    return next();
  }
  next({
    status: 400,
    message: "Must include valid people!",
  });
}

async function dataValidator(req, res, next) {
  console.log(req.body);
  if (req.body.data) {
    return next();
  }
  next({
    status: 400,
    message: "Must include data!",
  });
}


async function futureDateValidator(req, res, next) {
const date = new Date(req.body.data.reservation_date)
  if (date > Date.now()) {
    return next();
  }
  next({
  status: 400,
  message: "The reservation_date is in the past. Only future reservations are allowed!",
});
}

async function openRestaurantValidator(req, res, next) {
  const date = new Date(req.body.data.reservation_date)
    if (date.getDay() !== 1) {
      return next();
    }
    next({
    status: 400,
    message: "The reservation_date falls on a closed Tuesday!",
  });
  }


  // for us-03 getminute gethour, create date from string like 122

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [
    asyncErrorBoundary(dataValidator),
    asyncErrorBoundary(firstNameValidator),
    asyncErrorBoundary(lastNameValidator),
    asyncErrorBoundary(mobileNumberValidator),
    asyncErrorBoundary(reservationDateValidator),
    asyncErrorBoundary(reservationTimeValidator),
    asyncErrorBoundary(peopleValidator),
    asyncErrorBoundary(futureDateValidator),
    asyncErrorBoundary(openRestaurantValidator),
    asyncErrorBoundary(create),
  ],
};

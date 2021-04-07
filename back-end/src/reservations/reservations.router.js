/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");
// const methodNotAllowed = require("../errors/notFound");

router
.route("/")
.get(controller.list)
.post(controller.create)

// router
// .route("/reservations")


module.exports = router;

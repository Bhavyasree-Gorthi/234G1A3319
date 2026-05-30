const express = require("express");

const router = express.Router();

const {
  getAllNotifications,
  getPriorityNotifications
} = require(
  "../controllers/notificationController"
);

router.get("/", getAllNotifications);

router.get(
  "/priority",
  getPriorityNotifications
);

module.exports = router;
const Log = require("../middleware/logger");

const {
  fetchNotifications,
  calculatePriority
} = require("../services/notificationService");

async function getAllNotifications(req, res) {
  try {
    await Log(
      "backend",
      "info",
      "controller",
      "Fetching notifications"
    );

    const notifications =
      await fetchNotifications();

    res.status(200).json(notifications);
  } catch (error) {
    await Log(
      "backend",
      "error",
      "controller",
      error.message
    );

    res.status(500).json({
      message: error.message
    });
  }
}

async function getPriorityNotifications(
  req,
  res
) {
  try {
    await Log(
      "backend",
      "info",
      "controller",
      "Calculating priority notifications"
    );

    const notifications =
      await fetchNotifications();

    const prioritized = notifications
      .map((item) => ({
        ...item,
        priority:
          calculatePriority(item)
      }))
      .sort(
        (a, b) =>
          b.priority - a.priority
      )
      .slice(0, 10);

    res.status(200).json(prioritized);
  } catch (error) {
    await Log(
      "backend",
      "error",
      "controller",
      error.message
    );

    res.status(500).json({
      message: error.message
    });
  }
}

module.exports = {
  getAllNotifications,
  getPriorityNotifications
};
const axios = require("axios");
const getToken = require("../utils/auth");

async function fetchNotifications() {
  const token = await getToken();

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data.notifications;
}

function calculatePriority(notification) {
  const weights = {
    Placement: 100,
    Result: 80,
    Event: 60
  };

  const typeWeight = weights[notification.Type] || 0;

  const timestamp = new Date(notification.Timestamp).getTime();

  const recencyScore = Math.floor(
    (Date.now() - timestamp) / 1000
  );

  return typeWeight - recencyScore;
}

module.exports = {
  fetchNotifications,
  calculatePriority
};
import { useEffect, useState } from "react";

import API from "../services/api";

import NotificationCard from "../components/NotificationCard";

function PriorityNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    fetchPriority();
  }, []);

  async function fetchPriority() {
    try {
      const response =
        await API.get("/priority");

      setNotifications(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h1>
        Top 10 Priority Notifications
      </h1>

      {notifications.map(
        (notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
          />
        )
      )}
    </div>
  );
}

export default PriorityNotifications;
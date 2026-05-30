import { useEffect, useState } from "react";

import API from "../services/api";

import NotificationCard from "../components/NotificationCard";

import FilterBar from "../components/FilterBar";

import Pagination from "../components/Pagination";

function AllNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [selectedType, setSelectedType] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    fetchNotifications();
  }, []);

  async function fetchNotifications() {
    try {
      const response = await API.get("/");

      setNotifications(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const filtered =
    selectedType === "All"
      ? notifications
      : notifications.filter(
          (item) =>
            item.Type === selectedType
        );

  const totalPages = Math.ceil(
    filtered.length / itemsPerPage
  );

  const start =
    (currentPage - 1) * itemsPerPage;

  const paginated =
    filtered.slice(
      start,
      start + itemsPerPage
    );

  return (
    <div className="container">
      <h1>All Notifications</h1>

      <FilterBar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {paginated.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default AllNotifications;
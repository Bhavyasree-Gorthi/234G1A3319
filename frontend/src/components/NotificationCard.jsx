function NotificationCard({ notification }) {
  return (
    <div className="card">
      <h3>{notification.Type}</h3>

      <p>{notification.Message}</p>

      <small>
        {notification.Timestamp}
      </small>

      {notification.priority && (
        <div>
          Priority: {notification.priority}
        </div>
      )}
    </div>
  );
}

export default NotificationCard;
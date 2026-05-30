# Notification System

## Name: Bhavya Sree

## Roll No: 234G1A3319

---

# Stage 1 - System Design

The goal of this project is to build a notification system for students.

The system should display different types of notifications such as:

* Placement Notifications
* Result Notifications
* Event Notifications

### APIs Used

```http
GET /api/notifications
GET /api/notifications/priority
```

### Basic Flow

```text
Frontend
   ↓
Backend
   ↓
Affordmed API / Database
```

The frontend requests notifications from the backend and displays them to the user.

---

# Stage 2 - Database Design

For database implementation I used Supabase (PostgreSQL).

### Users Table

Stores student information.

Fields:

* id
* roll_no
* name
* email
* created_at

### Notifications Table

Stores notification details.

Fields:

* id
* user_id
* type
* message
* is_read
* created_at

### Relationship

One user can have many notifications.

---

# Stage 3 - Database Optimization

As the number of notifications increases, queries can become slower.

Example Query:

```sql
SELECT *
FROM notifications
WHERE user_id = ?
AND is_read = false;
```

### Solution

I created indexes to improve performance.

```sql
CREATE INDEX idx_user_notifications
ON notifications(user_id);

CREATE INDEX idx_student_read_created
ON notifications(user_id,is_read,created_at);
```

### Benefits

* Faster searching
* Faster unread notification retrieval
* Better performance for large datasets

---

# Stage 4 - Real Time Notifications

Fetching notifications every time the page refreshes is not efficient.

I studied three approaches:

1. Polling
2. Long Polling
3. WebSockets

### Preferred Solution

WebSockets

Reasons:

* Real-time updates
* Better user experience
* Less load on the server

---

# Stage 5 - Handling Large Number of Users

If notifications need to be sent to 50,000 students, sending them one by one is very slow.

### Problem

```javascript
for(student of students){
 sendEmail();
 saveNotification();
}
```

### Better Solution

Use a queue system.

Example:

* RabbitMQ
* BullMQ

### Flow

```text
Request
   ↓
Queue
   ↓
Workers
   ↓
Email / Push Notification
```

### Advantages

* Faster processing
* Retry support
* Scalable architecture

---

# Stage 6 - Priority Notifications

The task requires displaying the top 10 important notifications.

I assigned weights to notification types.

| Type      | Weight |
| --------- | ------ |
| Placement | 100    |
| Result    | 80     |
| Event     | 60     |

Notifications are sorted based on priority score and the top 10 are returned.

### Backend APIs

```http
GET /api/notifications

GET /api/notifications/priority
```

### Backend Structure

```text
controllers/
services/
routes/
middleware/
utils/
```

### Logging Middleware

The project includes the mandatory logging middleware provided in the assignment.

The logger:

1. Gets auth token
2. Sends logs
3. Records backend activities

---

# Stage 7 - Frontend

Frontend is built using:

* React
* React Router
* Axios

### Pages

* All Notifications
* Priority Notifications

### Features

* View notifications
* Filter by notification type
* Pagination
* Responsive design

### Components

* Navbar
* Notification Card
* Filter Bar
* Pagination

The frontend fetches data from the backend APIs and displays it to users.

---

# Testing

I tested:

### Registration API

Successfully received Client ID and Client Secret.

### Authentication API

Successfully generated access token.

### Logging API

Successfully created logs using middleware.

### Backend APIs

```http
GET /api/notifications

GET /api/notifications/priority
```

### Frontend

* Notification listing
* Filtering
* Pagination
* Responsive view

---

# Conclusion

In this project I designed and implemented a notification system using React, Node.js, Express and Supabase. I also implemented the required logging middleware, database design, optimization strategies and priority notification ranking.

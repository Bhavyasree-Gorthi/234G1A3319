# Stage 1

## Objective

Display notifications to logged in students.

### Notification Types

- Event
- Result
- Placement

## APIs

### Create Notification

POST /notifications

Request

{
  "type":"Placement",
  "message":"Amazon Hiring"
}

### Get Notifications

GET /notifications

### Mark Read

PUT /notifications/:id/read

### Delete

DELETE /notifications/:id

## Real Time Notifications

Socket.IO based push notifications.

## Architecture

Client
 ↓
API Gateway
 ↓
Notification Service
 ↓
Database

# Stage 2

## Database Choice

PostgreSQL (Supabase)

## Schema

### Users

* id
* roll_no
* name
* email
* created_at

### Notifications

* id
* user_id
* type
* message
* is_read
* created_at

## Scaling Challenges

As the number of notifications grows, queries filtering unread notifications for a specific user become slower due to large table scans.

## Solutions

1. Indexing
2. Pagination
3. Archiving old notifications
4. Query optimization
5. Database partitioning for very large datasets
# Stage 3

## Query Analysis

Original Query:

SELECT *
FROM notifications
WHERE user_id = ?
AND is_read = false
ORDER BY created_at DESC;

## Issue

Without indexes, the database performs a full table scan.

## Optimization

Composite Index:

CREATE INDEX idx_student_read_created
ON notifications(user_id,is_read,created_at);

## Benefits

* Faster unread notification retrieval
* Reduced database load
* Improved scalability as records grow

## Placement Search Query

SELECT *
FROM notifications
WHERE type='Placement'
AND message ILIKE '%hiring%';

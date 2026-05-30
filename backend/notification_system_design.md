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
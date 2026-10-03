# Student Management REST API

## Web Dev III – Assignment 2

A simple Student Management REST API built using Node.js and Express.js. This project demonstrates REST API development, CRUD operations, custom middleware, modular routing, JSON file handling, and error handling.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- JSON
- Postman

## Project Structure

```text
Web Dev III Assignment 2/
├── data/
│   └── data.json
├── middleware/
│   └── logger.js
├── operations/
│   └── user.js
├── routes/
│   └── route.js
├── node_modules/
├── package.json
├── package-lock.json
└── server.js
```

## Features

- View all students
- Add a new student
- Update student details
- Delete a student
- Custom logger middleware
- Modular routing
- Error handling
- JSON file-based data storage

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| POST | `/students` | Add a new student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

## Student Data

Student records are stored in `data/data.json`.

Example:

```json
[
    {
        "id": 2501730063,
        "name": "Sagar",
        "course": "BTech CSE"
    },
    {
        "id": 2501730067,
        "name": "Chirag",
        "course": "BTech ECE"
    }
]
```

## API Usage

### Get All Students

**GET**

```text
http://localhost:3000/students
```

### Create Student

**POST**

```text
http://localhost:3000/students
```

Request body:

```json
{
    "id": 2501730120,
    "name": "Mehul",
    "course": "BTech CSE"
}
```

### Update Student

**PUT**

```text
http://localhost:3000/students/2501730063
```

Request body:

```json
{
    "name": "Sagar Kumar",
    "course": "BTech CSE"
}
```

### Delete Student

**DELETE**

```text
http://localhost:3000/students/2501730063
```

No request body is required.

## HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| 200 | Successful request |
| 201 | Student successfully created |
| 400 | Bad request |
| 404 | Student not found |
| 500 | Internal server error |

## Middleware

A custom logger middleware is used to display the HTTP request method in the terminal.

Example:

```text
GET
POST
PUT
DELETE
```

The middleware is located in:

```text
middleware/logger.js
```

## Error Handling

The API uses `try...catch` blocks to handle unexpected errors.

For invalid or missing data:

```json
{
    "message": "Name, course and id are required",
    "success": false
}
```

For a student that does not exist:

```json
{
    "message": "Student not found",
    "success": false
}
```

For unexpected server errors:

```json
{
    "message": "Internal server error",
    "success": false
}
```

## Running the Project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Or run in development mode using Nodemon:

```bash
npm run dev
```

The server runs on:

```text
http://localhost:3000
```

## Testing

The APIs can be tested using Postman.

The following operations should be tested:

- GET all students
- POST a student
- PUT a student
- DELETE a student
- Invalid student ID
- Missing data in POST request

## Assignment Requirements

This project implements:

- Express server setup
- REST APIs
- CRUD operations
- Custom logger middleware
- Modular routing
- Error handling
- Postman testing

## Author

Web Dev III – Assignment 2
Mehul Srivastava

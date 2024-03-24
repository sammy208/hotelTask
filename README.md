# hotelRoomTask

# Hotel Rooms Management System
This project is a Hotel Rooms Management System built with Node.js, Express.js, and MongoDB. It provides a backend API for managing rooms and room types in a hotel.

# Features
Create, read, update, and delete (CRUD) operations for rooms and room types
Fetch rooms with optional filters (search, room type, price range)
Error handling middleware for handling server errors gracefully
Environment configuration using dotenv for managing environment variables
Integration with MongoDB database, express and Winston logger.
# Installation
Clone the repository:

git clone https://github.com/sammy208/hotelRoomTask.git
# Install dependencies:

npm install winston
npm install mongoose
npm install express
npm install nodemon
The dotenv file need to include the following PORT=5000 MONGODB_URI = mongodb+srv://samella20008:<password>@cluster0.yl2zcec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# Start the server:

npm start
# API Endpoints
# Room Types
POST /api/v1/roomTypes: Create a new room type
GET /api/v1/roomTypes: Get all room types
GET /api/v1/roomTypes/:id: Get a room type by ID
PATCH /api/v1/roomTypes/:id: Update a room type by ID
DELETE /api/v1/roomTypes/:id: Delete a room type by ID
# Rooms
POST /api/v1/rooms: Create a new room
GET /api/v1/rooms: Get all rooms with optional filters
GET /api/v1/rooms/:id: Get a room by ID
PATCH /api/v1/rooms/:id: Update a room by ID
DELETE /api/v1/rooms/:id: Delete a room by ID
# Folder Structure

hotelRooms/
│
├── src/
│   ├── controllers/
│   │   ├── roomTypeController.js
│   │   └── roomController.js
│   │
│   ├── models/
│   │   ├── RoomType.js
│   │   └── Room.js
│   │
│   ├── routes/
│   │   ├── roomTypeRouter.js
│   │   └── roomRouter.js
│   │
│   ├── services/
│   │   └── roomService.js
│   │
│   ├── validations/
│   │   └── api-key-validator.js
│   │
│   ├── utils/
│   │   └── logger.js
|   |    └── utils.js
│   │
│   └── server.js
│
├── .env
├── package.json
└── README.md

# Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Winston

# Authors
Samuel Ndubuisi
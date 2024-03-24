const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { asyncHandler } = require('../utils');
const {checkAdminAccess} = require('../middleware/authorization.js')


// POST endpoint to create a new room
router.post('/api/v1/rooms',checkAdminAccess, asyncHandler(roomController.createRoom));

// GET endpoint to fetch all rooms
router.get('/api/v1/rooms', asyncHandler(roomController.getAllRooms));

// GET endpoint to fetch a single room by ID
router.get('/api/v1/rooms/:id', asyncHandler(roomController.getRoomById));

// PATCH endpoint to update a room by ID
router.patch('/api/v1/rooms/:id',checkAdminAccess, asyncHandler(roomController.updateRoomById));

// DELETE endpoint to delete a room by ID
router.delete('/api/v1/rooms/:id',checkAdminAccess, asyncHandler(roomController.deleteRoomById));

module.exports = router;
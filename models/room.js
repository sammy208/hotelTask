const express = require('express');
const router = express.Router();
const Room = require('./room');
const roomTypeController = require('../controllers/roomTypeController'); 
const { asyncHandler } = require('../../../utils');

// POST endpoint for creating a new room
router.post('/api/v1/rooms', asyncHandler(roomTypeController.createRoom));

// GET endpoint for fetching all rooms with filters
router.get('/api/v1/rooms', asyncHandler(async (req, res) => {
  let query = {};
  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: 'i' };
  }
  if (req.query.roomType) {
    query.roomType = req.query.roomType;
  }
  if (req.query.minPrice) {
    query.price = { $gte: req.query.minPrice };
  }
  if (req.query.maxPrice) {
    if (!query.price) query.price = {};
    query.price.$lte = req.query.maxPrice;
  }

  const rooms = await Room.find(query);
  res.status(200).json({ data: rooms });
}));

// Router GET method for getting a room by id 
router.get('/api/v1/rooms/:id', asyncHandler(roomTypeController.getRoomById));

// Router PATCH method for updating a room 
router.patch('/api/v1/rooms/:id', asyncHandler(roomTypeController.updateRoomById));

// Router DELETE method for deleting a room
router.delete('/api/v1/rooms/:id', asyncHandler(roomTypeController.deleteRoomById));

module.exports = router;
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @desc    Get user tickets
// @route   GET /api/tickets/
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({ user: req.user.id }); // req.user.id comes from the authMiddleware.js

  res.status(200).json(tickets);
});

// @desc    Create new ticket
// @route   POST /api/tickets/
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    res.status(400);
    throw new Error('Please add a product and description');
  }

  const ticket = await Ticket.create({
    user: req.user.id, // req.user.id comes from the authMiddleware.js
    product,
    description,
    status: 'new',
  });

  res.status(201).json(ticket);
});

module.exports = { getTickets, createTicket };

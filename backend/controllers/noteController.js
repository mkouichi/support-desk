const asyncHandler = require('express-async-handler');

const Note = require('../models/noteModel');
const Ticket = require('../models/ticketModel');

// @desc    Get notes for a ticket
// @route   GET /api/tickets/:ticketId/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findOne({
    _id: req.params.ticketId,
    user: req.user.id,
  });

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const notes = await Note.find({ ticket: req.params.ticketId });

  res.status(200).json(notes);
});

// @desc    Create ticket note
// @route   POST /api/tickets/:ticketId/notes
// @access  Private
const addNote = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findOne({
    _id: req.params.ticketId,
    user: req.user.id,
  });

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const note = await Note.create({
    user: req.user.id,
    ticket: req.params.ticketId,
    text: req.body.text,
    isStaff: false,
  });

  res.status(200).json(note);
});

module.exports = { getNotes, addNote };

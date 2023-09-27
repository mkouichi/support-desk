const asyncHandler = require('express-async-handler');

// @desc    Register a user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  res.send(req.body);
});

// @desc    Login a user
// @route   POST /api/users'login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = { registerUser, loginUser };
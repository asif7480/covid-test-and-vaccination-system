import { User } from "../models/user.model.mjs";
import { ErrorResponse } from "../utils/ErrorResponse.mjs";
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs";


/**
 * @desc    Get all hospitals with approved status
 * @route   GET /api/hospitals
 * @access  Private (Authenticated user)
 */
const getAllHospitals = asyncHandler(async (request, response) => {
  const page = parseInt(request.query.page) || 1;
  const limit = parseInt(request.query.limit) || 10;

  const skip = (page - 1) * limit;

  const totalHospitals = await User.countDocuments({
    role: "hospital",
    isApproved: "approved",
  });

  const hospitals = await User.find({ role: "hospital", isApproved: "approved" })
    .skip(skip)
    .limit(limit);

  const totalPages = Math.ceil(totalHospitals / limit);
  
  response.status(200).json({ page, totalPages, totalHospitals, hospitals });
});

/**
 * @desc    Get a single hospital by ID
 * @route   GET /api/hospitals/:id
 * @access  Private (Authenticated user)
 */
const getSingleHospital = asyncHandler(async (request, response) => {
  const hospital = await User.findById(request.params.id);

  if (!hospital) {
    throw new ErrorResponse(404, `Hospital not found.`);
  }

  response.status(200).json(hospital);
});

/**
 * @desc    Add a new hospital
 * @route   POST /api/hospitals
 * @access  Private (Admin or Hospital)
 */
const addHospital = asyncHandler(async (request, response) => {
  const { name, email } = request.body;

  if (!name || !email) {
    throw new ErrorResponse(400, `Input all fields.`);
  }

  const hashPassword = await bcrypt.hash("Hospital123", 10);

  const hospital = new User({
    name,
    email,
    password: hashPassword,
    role: "Hospital",
    isApproved: "approved",
  });

  await hospital.save();

  response.status(201).json({
    message: "New Hospital added.",
    hospital,
  });
});

/**
 * @desc    Update an existing hospital's details
 * @route   PUT /api/hospitals/:id
 * @access  Private (Admin or Hospital)
 */
const updateHospital = asyncHandler(async (request, response) => {
  const { name, email, isApproved, password } = request.body;

  const hospital = await User.findById(request.params.id);

  if (!hospital || hospital.role.toLowerCase() !== "hospital") {
    throw new ErrorResponse(404, `Hospital not found.`);
  }

  if (name) hospital.name = name;
  if (email) hospital.email = email;
  if (isApproved) hospital.isApproved = isApproved;

  if (password) {
    const hashPassword = await bcrypt.hash(password, 10);
    hospital.password = hashPassword;
  }

  await hospital.save();

  response.status(200).json({
    message: `Hospital updated successfully`,
    hospital,
  });
});

/**
 * @desc    Delete a hospital
 * @route   DELETE /api/hospitals/:id
 * @access  Private (Admin or Hospital)
 */
const deleteHospital = asyncHandler(async (request, response) => {
  const hospital = await User.findById(request.params.id);

  if (!hospital || hospital.role.toLowerCase() !== "hospital") {
    throw new ErrorResponse(404, `Hospital not found.`);
  }

  await User.findByIdAndDelete(request.params.id);

  response.status(200).json({
    message: `Hospital deleted successfully.`,
  });
});

export {
  getAllHospitals,
  getSingleHospital,
  addHospital,
  updateHospital,
  deleteHospital,
};
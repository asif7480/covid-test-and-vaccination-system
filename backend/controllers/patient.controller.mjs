import { User } from "../models/user.model.mjs";
import asyncHandler from "express-async-handler";
import { ErrorResponse } from "../utils/ErrorResponse.mjs";
import bcrypt from "bcryptjs";

/**
 * @desc    Get all patients with approved status
 * @route   GET /api/patients
 * @access  Private (Authenticated user)
 */
const getAllPatients = asyncHandler(async (request, response) => {
  const page = parseInt(request.query.page) || 1;
  const limit = parseInt(request.query.limit) || 10;

  const skip = (page - 1) * limit;

  const totalPatients = await User.countDocuments({
    role: "patient",
    isApproved: "approved",
  });

  const patients = await User.find({ role: "patient", isApproved: "approved" })
    .skip(skip)
    .limit(limit);

  const totalPages = Math.ceil(totalPatients / limit);
  
  response.status(200).json({ page, totalPages, totalPatients, patients });
});

/**
 * @desc    Get a single patient by ID
 * @route   GET /api/patients/:id
 * @access  Private (Authenticated user)
 */
const getSinglePatient = asyncHandler(async (request, response) => {
  const patient = await User.findById(request.params.id);

  if (!patient) {
    throw new ErrorResponse(404, `Patient not found.`);
  }

  response.status(200).json(patient);
});

/**
 * @desc    Add a new patient
 * @route   POST /api/patients
 * @access  Private (Admin or Hospital)
 */
const addPatient = asyncHandler(async (request, response) => {
  const { name, email } = request.body;

  if (!name || !email) {
    throw new ErrorResponse(400, `Input all fields.`);
  }

  const hashPassword = await bcrypt.hash("patient123", 10);

  const patient = new User({
    name,
    email,
    password: hashPassword,
    role: "Patient",
    isApproved: "approved",
  });

  await patient.save();

  response.status(201).json({
    message: "New Patient added.",
    patient,
  });
});

/**
 * @desc    Update an existing patient's details
 * @route   PUT /api/patients/:id
 * @access  Private (Admin or Hospital)
 */
const updatePatient = asyncHandler(async (request, response) => {
  const { name, email, isApproved, password } = request.body;

  const patient = await User.findById(request.params.id);

  if (!patient || patient.role.toLowerCase() !== "patient") {
    throw new ErrorResponse(404, `Patient not found.`);
  }

  if (name) patient.name = name;
  if (email) patient.email = email;
  if (isApproved) patient.isApproved = isApproved;

  if (password) {
    const hashPassword = await bcrypt.hash(password, 10);
    patient.password = hashPassword;
  }

  await patient.save();

  response.status(200).json({
    message: `Patient updated successfully`,
    patient,
  });
});

/**
 * @desc    Delete a patient
 * @route   DELETE /api/patients/:id
 * @access  Private (Admin or Hospital)
 */
const deletePatient = asyncHandler(async (request, response) => {
  const patient = await User.findById(request.params.id);

  if (!patient || patient.role.toLowerCase() !== "patient") {
    throw new ErrorResponse(404, `Patient not found.`);
  }

  await User.findByIdAndDelete(request.params.id);

  response.status(200).json({
    message: `Patient deleted successfully.`,
  });
});

export {
  getAllPatients,
  getSinglePatient,
  addPatient,
  updatePatient,
  deletePatient,
};

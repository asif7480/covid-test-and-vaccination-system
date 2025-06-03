import { VaccinatedPatient } from "../models/vaccinatedPatient.model.mjs";
import asyncHandler from "express-async-handler";
import { ErrorResponse } from "../utils/ErrorResponse.mjs";

const getAllVaccinatedPatients = asyncHandler(async (request, response) => {
  const page = parseInt(request.query.page) || 1;
  const limit = parseInt(request.query.limit) || 10;

  const skip = (page - 1) * limit;

  const totalVaccinatedPatients = await VaccinatedPatient.countDocuments();
  const vaccinatedPatients = await VaccinatedPatient.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalPages = Math.ceil(totalVaccinatedPatients / limit);

  response.status(200).json({
    page,
    totalPages,
    totalVaccinatedPatients,
    vaccinatedPatients,
  });
});

const addVaccinatedPatient = asyncHandler(async (request, response) => {
  const { patient, vaccine, date } = request.body;

  const missing = ["patient", "vaccine", "date"].filter(
    (input) => !request.body[input]
  );

  if (missing.length > 0) {
    throw new ErrorResponse(400, `Missing ${missing.join(", ")}`);
  }

  const inputDate = new Date(date);
  const today = new Date();

  if (isNaN(inputDate.getTime())) {
    throw new ErrorResponse(400, `Invalid date format`);
  }

  if (inputDate < now) {
    throw new ErrorResponse(400, `Date must be today in the future.`);
  }

  const vaccinatedPatient = await VaccinatedPatient.create({
    patient,
    vaccine,
    date,
  });

  response.status(201).json({
    message: "Vaccinated Patient added.",
    vaccinatedPatient,
  });
});

const updateVaccinatedPatient = asyncHandler(async (request, response) => {
  const vaccinatedPatient = await VaccinatedPatient.findById(request.params.id);

  if (!vaccinatedPatient) {
    throw new ErrorResponse(404, `Vaccinated Patient not found.`);
  }

  const updatedVaccinatedPatient = await VaccinatedPatient.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );

  response.status(200).json({
    message: "Vaccinated Patient updated.",
    updatedVaccinatedPatient,
  });
});

const deleteVaccinatedPatient = asyncHandler(async (request, response) => {
  const vaccinatedPatient = await VaccinatedPatient.findById(request.params.id);

  if (!vaccinatedPatient) {
    throw new ErrorResponse(404, `Vaccinated Patient not found.`);
  }

  await VaccinatedPatient.findByIdAndDelete(request.params.id)

  response.status(200).json({
    message: "Deleted successfully."
  })
});


export {
    getAllVaccinatedPatients,
    addVaccinatedPatient,
    updateVaccinatedPatient,
    deleteVaccinatedPatient
}
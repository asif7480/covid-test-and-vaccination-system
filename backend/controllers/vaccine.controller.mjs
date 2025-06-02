import { Vaccine } from "../models/vaccine.model.mjs";
import asyncHandler from "express-async-handler";
import { ErrorResponse } from "../utils/ErrorResponse.mjs";

const getAllVaccines = asyncHandler(async (request, response) => {
  const page = parseInt(request.query.page) || 1;
  const limit = parseInt(request.query.limit) || 10;

  const skip = (page - 1) * limit;

  const totalVaccines = await Vaccine.countDocuments();
  const vaccines = await Vaccine.find().skip(skip).limit(limit);

  const totalPages = Math.ceil(totalVaccines / limit);

  response.status(200).json({
    page,
    totalPages,
    totalVaccines,
    vaccines,
  });
});

const addVaccine = asyncHandler(async (request, response) => {
  const { vaccineName, isAvailable, quantity } = request.body;

  const missing = ["vaccineName", "isAvailable"].filter(
    (input) => !request.body[input]
  );

  if (missing.length > 0) {
    throw new ErrorResponse(400, `Missing ${missing.join(", ")}`);
  }

  const vaccineExists = await Vaccine.findOne({ vaccineName })
  if(vaccineExists){
    throw new ErrorResponse(409, `Vaccine already exists.`)
  }

  const newVaccine = await Vaccine.create({
    vaccineName,
    isAvailable,
    quantity,
  });

  response.status(201).json({
    message: `New vaccine added.`,
    vaccine: newVaccine,
  });
});

const updateVaccine = asyncHandler(async (request, response) => {
  const vaccine = await Vaccine.findById(request.params.id);

  if (!vaccine) throw new ErrorResponse(404, `Vaccine not found.`);

  const updatedVaccine = await Vaccine.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );
  response.status(200).json({
    message: `Vaccine updated successfully.`,
    vaccine: updatedVaccine,
  });
});

const deleteVaccine = asyncHandler(async (request, response) => {
  const vaccine = await Vaccine.findById(request.params.id);

  if (!vaccine) throw new ErrorResponse(404, `Vaccine not found.`);

  await Vaccine.findByIdAndDelete(request.params.id)

  response.status(200).json({
    message: `Vaccine deleted successfully.`
  })

});

export { getAllVaccines, addVaccine, updateVaccine, deleteVaccine };

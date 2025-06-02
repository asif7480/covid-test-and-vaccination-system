import { CovidTest } from "../models/covidTest.model.mjs";
import { ErrorResponse } from "../utils/ErrorResponse.mjs";
import asyncHandler from "express-async-handler";

const getAllTests = asyncHandler(async (request, response) => {
  const page = parseInt(request.query.page) || 1;
  const limit = parseInt(request.query.limit) || 10;

  const skip = (page - 1) * limit;

  const totalTests = await CovidTest.countDocuments();

  const tests = await CovidTest.find()
    .populate("patient")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalPages = Math.ceil(totalTests / limit);

  response.status(200).json({
    page,
    totalPages,
    totalTests,
    tests,
  });
});

const addTest = asyncHandler(async (request, response) => {
  const { patient, status } = request.body;

  const missing = ["patient", "status"].filter((input) => !request.body[input]);
  if (missing.length > 0) {
    throw new ErrorResponse(400, `Missing ${missing.join(" ,")}`);
  }

  const newTest = await CovidTest.create({
    patient,
    status,
  });

  response.status(201).json({
    message: "New Covid Test added.",
    test: newTest,
  });
});

const getSingleTest = asyncHandler( async(request, response) => {
  const test = await CovidTest.findById(request.params.id).populate("patient");

  if (!test) throw new ErrorResponse(404, `Test not found.`);

  response.status(200).json({ test })
})

const updateTest = asyncHandler(async (request, response) => {
  const test = await CovidTest.findById(request.params.id);

  if (!test) throw new ErrorResponse(404, `Test not found.`);

  const updatedTest = await CovidTest.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );
  response
    .status(200)
    .json({ message: `Test updated successfully.`, test: updatedTest });
});

const deleteTest = asyncHandler(async (request, response) => {
  const test = await CovidTest.findById(request.params.id);

  if (!test) throw new ErrorResponse(404, `Test not found.`);

  await CovidTest.findByIdAndDelete(request.params.id)
  response.status(200).json({
    message: `Test has been deleted succcessfully.`
  })
});

export {
    getAllTests,
    addTest,
    getSingleTest,
    updateTest,
    deleteTest
}

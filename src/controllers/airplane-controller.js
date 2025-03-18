import { StatusCodes } from "http-status-codes";
import { createAirplaneService, getAirplanes } from "../services/airplane-service.js";
import { errorResponse } from "../utils/common/error-response.js";
import { successResponse } from "../utils/common/success-response.js";

export async function createAirplaneController(req, res) {
    try {
        const { modelNumber, capacity } = req.body;
        const airplane = await createAirplaneService({
            modelNumber,
            capacity
        });
        successResponse.message = "Airplane created successfully.";
        successResponse.data = airplane;

        return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an airplane.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}

export async function getAirplaneController(req, res) {
    try {
        const airplanes = await getAirplanes();
        // successResponse.message = "Airplane created successfully.";
        successResponse.data = airplanes;

        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an airplane.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}
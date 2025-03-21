import { StatusCodes } from "http-status-codes";
import { createAirplaneService, deleteAirplane, getAirplaneById, getAirplanes, updateAirplane } from "../services/airplane-service.js";
import { errorResponse } from "../utils/common/error-response.js";
import { successResponse } from "../utils/common/success-response.js";
import { AppError } from "../utils/errors/app-error.js";

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

export async function getAirplaneByIdController(req, res) {
    try {
        const { airplaneId } = req.params;
        const airplane = await getAirplaneById(airplaneId);

        if (!airplane) {
            throw new AppError("Airplane not found.", StatusCodes.NOT_FOUND);
        }

        successResponse.data = airplane;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an airplane.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}

export async function deleteAirplaneController(req, res) {
    try {
        const { airplaneId } = req.params;
        const data = await getAirplaneById(airplaneId);

        if (!data) {
            throw new AppError("Airplane not found.", StatusCodes.NOT_FOUND);
        }
        const airplane = await deleteAirplane(airplaneId);

        successResponse.data = airplane.id;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an airplane.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}


export async function updateAirplaneController(req, res) {
    try {
        const { data } = req.body;
        const { airplaneId } = req.params;
        const airplaneData = await getAirplaneById(airplaneId);

        if (!airplaneData) {
            throw new AppError("Airplane not found.", StatusCodes.NOT_FOUND);
        }
        const airplane = await updateAirplane(airplaneId, data);

        // successResponse.data = airplane.id;
        return res.status(StatusCodes.OK).json(airplane);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an airplane.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}
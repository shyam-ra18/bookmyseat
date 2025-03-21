import { StatusCodes } from "http-status-codes";
import { AirplaneRepository } from "../repositories/airplane-repository.js";
import { AppError } from "../utils/errors/app-error.js";

const airplaneRepository = new AirplaneRepository()

export async function createAirplaneService(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        // console.log("error=>>", error.message)
        // if (error.name === "PrismaClientValidationError") {
        //     throw new AppError('Cannot create a new airplen', StatusCodes.INTERNAL_SERVER_ERROR)
        // }
        throw new AppError('Cannot create a new airplen', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot get all the airplens', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export async function getAirplaneById(id) {
    try {
        const airplane = await airplaneRepository.getById(id);
        return airplane;
    } catch (error) {
        throw new AppError('Cannot get the airplen', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export async function deleteAirplane(id) {
    try {
        const airplane = await airplaneRepository.destroy(id);
        return airplane;
    } catch (error) {
        throw new AppError('Cannot delete the airplen', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export async function updateAirplane(id, data) {
    try {
        const airplane = await airplaneRepository.update(id, data);
        return airplane;
    } catch (error) {
        throw new AppError('Cannot delete the airplen', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
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
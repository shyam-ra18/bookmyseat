import { AirplaneRepository } from "../repositories/airplane-repository.js";

const airplaneRepository = new AirplaneRepository()

export async function createAirplaneService(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}
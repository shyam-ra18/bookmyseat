import { StatusCodes } from "http-status-codes";
import { CityRepository } from "../repositories/city-repository.js";
import { AppError } from "../utils/errors/app-error.js";

const cityRepository = new CityRepository()

export async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.code == 'P2002') {
            throw new AppError('City already exists', StatusCodes.CONFLICT)
        } else {
            throw new AppError('Cannot create a new city', StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }
}

export async function getCityById(id) {
    try {
        const city = await cityRepository.getById(id);
        return city;
    } catch (error) {
        throw new AppError('Cannot get the city', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


export async function getCities() {
    try {
        const city = await cityRepository.getAll();
        return city;
    } catch (error) {
        throw new AppError('Cannot get all the cities', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export async function deleteCity(id) {
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        throw new AppError('Cannot delete the city', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export async function updateCity(id, data) {
    try {
        const city = await cityRepository.update(id, data);
        return city;
    } catch (error) {
        throw new AppError('Cannot update the city', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
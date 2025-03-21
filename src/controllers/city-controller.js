import { StatusCodes } from "http-status-codes";
import { createAirplaneService, deleteAirplane, getAirplaneById, getAirplanes, updateAirplane } from "../services/airplane-service.js";
import { errorResponse } from "../utils/common/error-response.js";
import { successResponse } from "../utils/common/success-response.js";
import { AppError } from "../utils/errors/app-error.js";
import { createCity, deleteCity, getCities, getCityById, updateCity } from "../services/city-service.js";

export async function createCityController(req, res) {
    try {
        const { name } = req.body;

        if (!name) {
            throw new AppError('City name is required', StatusCodes.BAD_REQUEST)
        }

        const city = await createCity({
            name
        });
        successResponse.message = "City created successfully.";
        successResponse.data = city;

        return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an city.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}

export async function getCitiesController(req, res) {
    try {
        const cities = await getCities();
        successResponse.data = cities;

        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an airplane.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}

export async function getCityByIdController(req, res) {
    try {
        const { cityId } = req.params;
        const city = await getCityById(cityId);

        if (!city) {
            throw new AppError("City not found.", StatusCodes.NOT_FOUND);
        }

        successResponse.data = city;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an airplane.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}

export async function deleteCityController(req, res) {
    try {
        const { cityId } = req.params;
        const data = await getCityById(cityId);

        if (!data) {
            throw new AppError("City not found.", StatusCodes.NOT_FOUND);
        }
        const airplane = await deleteCity(cityId);

        successResponse.data = airplane.id;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an airplane.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}


export async function updateCityController(req, res) {
    try {
        const { data } = req.body;
        const { cityId } = req.params;
        const cityData = await getCityById(cityId);

        if (!cityData) {
            throw new AppError("City not found.", StatusCodes.NOT_FOUND);
        }
        const city = await updateCity(cityId, data);


        // successResponse.data = airplane.id;
        return res.status(StatusCodes.OK).json(city);
    } catch (error) {
        // errorResponse.message = "Something went wrong while creating an airplane.";
        errorResponse.error = error
        return res.status(error.statusCode).json(errorResponse);
    }
}
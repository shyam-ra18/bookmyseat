import { StatusCodes } from "http-status-codes";
import { createAirplaneService } from "../services/airplane-service.js";

export async function createAirplaneController(req, res) {
    try {
        const { modelNumber, capacity } = req.body;
        const airplane = await createAirplaneService({
            modelNumber,
            capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Airplane created successfully',
            data: airplane,
            error: {},
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while creating an airplane',
            data: {},
            error: error
        })
    }
}
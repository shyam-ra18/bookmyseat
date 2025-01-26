import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/common/error-response.js";

export const validateCreateRequest = (req, res, next) => {
    const { modelNumber, capacity } = req.body;

    // Check if both modelNumber and capacity are provided
    if (!modelNumber || !capacity) {
        errorResponse.message = "Missing required fields: 'modelNumber' and 'capacity' are required.";
        errorResponse.error = {
            explanation: "Ensure to provide both 'modelNumber' and 'capacity' in the request body."
        };
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    // Validate that capacity is a positive integer
    if (!Number.isInteger(capacity) || capacity <= 0) {
        errorResponse.message = "'capacity' must be a positive integer.";
        errorResponse.error = {
            explanation: "The value of 'capacity' should be a whole number greater than 0."
        };
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    // Validate that modelNumber is a non-empty string
    if (typeof modelNumber !== "string" || modelNumber.trim() === "") {
        errorResponse.message = "'modelNumber' must be a non-empty string.";
        errorResponse.error = {
            explanation: "Ensure 'modelNumber' is a valid string and not empty or only whitespace."
        };
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    // If all validations pass, proceed to the next middleware
    next();
};

import { StatusCodes } from "http-status-codes";

export const validateCreateRequest = (req, res, next) => {
    const { modelNumber, capacity } = req.body;

    // Check if both modelNumber and capacity are provided
    if (!modelNumber || !capacity) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: true,
            message: "Missing required fields: 'modelNumber' and 'capacity' are required.",
        });
    }

    // Validate that capacity is a positive integer
    if (!Number.isInteger(capacity) || capacity <= 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: true,
            message: "'capacity' must be a positive integer.",
        });
    }

    // Validate that modelNumber is a non-empty string
    if (typeof modelNumber !== "string" || modelNumber.trim() === "") {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: true,
            message: "'modelNumber' must be a non-empty string.",
        });
    }

    // If all validations pass, proceed to the next middleware
    next();
};

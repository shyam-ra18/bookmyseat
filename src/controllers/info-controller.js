import { StatusCodes } from "http-status-codes"


export const info = (req, res) => {
    return res.status(StatusCodes.OK).send({
        success: true,
        message: 'API is running',
        data: {},
        error: {}
    })
}
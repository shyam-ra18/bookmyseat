import { where } from "sequelize";
import { Logger } from "../config/logger-config.js";
import { AppError } from "../utils/errors/app-error.js";
import { StatusCodes } from "http-status-codes";

export class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        // Prisma create method is slightly different than Sequelize
        const response = await this.model.create({
            data: data
        });
        return response;
    }


    async destroy(id) {
        try {
            // Proceed with deletion
            const response = await this.model.delete({
                where: { id },
            });
            return response
        } catch (error) {
            throw new AppError('Record not found', StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    async getAll() {
        const response = await this.model.findMany();
        return response;
    }

    async getById(id) {
        const response = await this.model.findUnique({
            where: { id }
        });
        return response;
    }

    async update(id, data) {
        // Prisma update method
        const response = await this.model.update({
            where: { id },
            data: data
        });
        return response;
    }
}

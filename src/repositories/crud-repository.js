import { where } from "sequelize";
import { Logger } from "../config/logger-config.js";

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
        const response = await this.model.delete({
            where: { id }
        });
        return response;
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

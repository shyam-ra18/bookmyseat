import { Logger } from "../config/logger-config.js";

export class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            // Prisma create method is slightly different than Sequelize
            const response = await this.model.create({
                data: data
            });
            return response;
        } catch (error) {
            console.log(error);
            Logger.error('Something went wrong in the Crud Repo: Create');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.delete({
                where: { id }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo: Destroy');
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findMany();
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo: GetAll');
            throw error;
        }
    }

    async update(id, data) {
        try {
            // Prisma update method
            const response = await this.model.update({
                where: { id },
                data: data
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo: Update');
            throw error;
        }
    }
}

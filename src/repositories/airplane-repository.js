import { CrudRepository } from "./crud-repository.js";
import { prisma } from '../utils/prisma-db.js'

export class AirplaneRepository extends CrudRepository {
    constructor(model) {
        super(prisma.airplane);
        // console.log("airplane", prisma)
    }
}
import { CrudRepository } from "./crud-repository.js";
import { prisma } from '../utils/prisma-db.js'

export class CityRepository extends CrudRepository {
    constructor(model) {
        super(prisma.cities);
    }
}
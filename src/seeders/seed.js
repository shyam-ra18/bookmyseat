import { prisma } from "../utils/prisma-db.js";
import { AirplaneSeedData } from "./airplane-seed-data.js";
import { FlightSeedData } from "./flight-seed-data.js";

async function main() {
    const airplanes = await prisma.airplane.createMany({
        data: AirplaneSeedData
    });

    console.log(`${airplanes.count} airplanes created`);

    const flights = await prisma.flight.createMany({
        data: FlightSeedData
    });

    console.log(`${flights.count} flights created`);

};

main().catch((e) => {
    console.log('Error while Seeding', e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
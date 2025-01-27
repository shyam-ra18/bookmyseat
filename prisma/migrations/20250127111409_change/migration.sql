/*
  Warnings:

  - The primary key for the `Airplane` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `modelNumber` on the `Airplane` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registrationNumber]` on the table `Airplane` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `economySeats` to the `Airplane` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastMaintenanceDate` to the `Airplane` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufactureDate` to the `Airplane` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturer` to the `Airplane` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Airplane` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationNumber` to the `Airplane` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'MAINTENANCE', 'RETIRED', 'INOPERATIVE');

-- AlterTable
ALTER TABLE "Airplane" DROP CONSTRAINT "Airplane_pkey",
DROP COLUMN "modelNumber",
ADD COLUMN     "businessSeats" INTEGER,
ADD COLUMN     "economySeats" INTEGER NOT NULL,
ADD COLUMN     "firstClassSeats" INTEGER,
ADD COLUMN     "fuelCapacity" DOUBLE PRECISION,
ADD COLUMN     "inService" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lastMaintenanceDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "manufactureDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "manufacturer" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "range" INTEGER,
ADD COLUMN     "registrationNumber" TEXT NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "totalWeightCapacity" DOUBLE PRECISION,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(3),
ADD CONSTRAINT "Airplane_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Airplane_id_seq";

-- CreateTable
CREATE TABLE "Flight" (
    "id" TEXT NOT NULL,
    "flightCode" TEXT NOT NULL,
    "airplaneId" TEXT NOT NULL,
    "departure" TIMESTAMP(3) NOT NULL,
    "arrival" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Flight_flightCode_key" ON "Flight"("flightCode");

-- CreateIndex
CREATE UNIQUE INDEX "Airplane_registrationNumber_key" ON "Airplane"("registrationNumber");

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_airplaneId_fkey" FOREIGN KEY ("airplaneId") REFERENCES "Airplane"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

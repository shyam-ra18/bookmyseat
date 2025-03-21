/*
  Warnings:

  - You are about to drop the column `city` on the `Airplane` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Airplane" DROP COLUMN "city";

-- CreateTable
CREATE TABLE "Cities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cities_name_key" ON "Cities"("name");

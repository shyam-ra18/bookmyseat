-- CreateTable
CREATE TABLE "Airplane" (
    "id" SERIAL NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Airplane_pkey" PRIMARY KEY ("id")
);

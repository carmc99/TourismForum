/*
  Warnings:

  - You are about to drop the column `city` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_locationId_fkey";

-- DropIndex
DROP INDEX "Location_city_key";

-- DropIndex
DROP INDEX "Location_country_key";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "city",
DROP COLUMN "country",
ADD COLUMN     "countryId" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "locationId",
ADD COLUMN     "countryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

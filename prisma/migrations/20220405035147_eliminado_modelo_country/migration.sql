/*
  Warnings:

  - You are about to drop the column `countryId` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[city]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[country]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `city` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_countryId_fkey";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "countryId",
DROP COLUMN "name",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "countryId",
ADD COLUMN     "locationId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Country";

-- CreateIndex
CREATE UNIQUE INDEX "Location_city_key" ON "Location"("city");

-- CreateIndex
CREATE UNIQUE INDEX "Location_country_key" ON "Location"("country");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

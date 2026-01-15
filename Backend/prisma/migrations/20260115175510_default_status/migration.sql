/*
  Warnings:

  - You are about to alter the column `createdAt` on the `Notes` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `Notes` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `createdAt` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Notes` MODIFY `status` ENUM('Pending', 'InProgress', 'Completed') NOT NULL DEFAULT 'Pending',
    MODIFY `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    MODIFY `updatedAt` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;

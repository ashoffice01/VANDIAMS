-- AlterTable
ALTER TABLE `product` ADD COLUMN `featured` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `description` VARCHAR(191) NULL;

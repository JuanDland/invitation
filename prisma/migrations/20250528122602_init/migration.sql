-- CreateTable
CREATE TABLE `Invitado` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL DEFAULT 2,
    `confirmado` BOOLEAN NOT NULL DEFAULT false,
    `mensaje` VARCHAR(191) NULL,

    UNIQUE INDEX `Invitado_token_key`(`token`),
    INDEX `Invitado_token_nombre_idx`(`token`, `nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

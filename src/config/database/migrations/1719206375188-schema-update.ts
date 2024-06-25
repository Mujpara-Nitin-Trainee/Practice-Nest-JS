import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1719206375188 implements MigrationInterface {
    name = 'SchemaUpdate1719206375188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`state\` (\`id\` int NOT NULL AUTO_INCREMENT, \`stateName\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`city\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cityName\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`stateId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`address_master\` (\`id\` int NOT NULL AUTO_INCREMENT, \`area\` varchar(255) NOT NULL, \`pincode\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`cityId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`mobileNo\` bigint NOT NULL, \`dob\` date NOT NULL, \`salt\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`categoryName\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_scarp_details\` (\`id\` int NOT NULL AUTO_INCREMENT, \`scarpKg\` int NOT NULL, \`price\` int NOT NULL, \`deliveryStatus\` varchar(255) NOT NULL DEFAULT 'Pending', \`paymentStatus\` varchar(255) NOT NULL DEFAULT 'Pending', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`categoryId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payout_master\` (\`id\` int NOT NULL AUTO_INCREMENT, \`amount\` int NOT NULL, \`status\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`ScapId\` int NOT NULL, \`scarpPaymentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`img_master\` (\`id\` int NOT NULL AUTO_INCREMENT, \`imgReferId\` int NOT NULL, \`imgReferType\` varchar(255) NOT NULL, \`imgName\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_master\` (\`id\` int NOT NULL AUTO_INCREMENT, \`roleName\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`permission_master\` (\`id\` int NOT NULL AUTO_INCREMENT, \`permissionName\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`scarp_delivery\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`scrapId\` int NOT NULL, \`deliveryBoyId\` int NOT NULL, \`pickUpAddressId\` int NOT NULL, \`deliveryAddressId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`address_master_user_user\` (\`addressMasterId\` int NOT NULL, \`userId\` int NOT NULL, INDEX \`IDX_6235987612b69a68fe64a158f3\` (\`addressMasterId\`), INDEX \`IDX_5a46cdffa11eaa017977db57a0\` (\`userId\`), PRIMARY KEY (\`addressMasterId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_master_permission_permission_master\` (\`roleMasterId\` int NOT NULL, \`permissionMasterId\` int NOT NULL, INDEX \`IDX_107bd95fb8c86a9155b5b3aedc\` (\`roleMasterId\`), INDEX \`IDX_8e55da14f473f7a26596b538b4\` (\`permissionMasterId\`), PRIMARY KEY (\`roleMasterId\`, \`permissionMasterId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`city\` ADD CONSTRAINT \`FK_e99de556ee56afe72154f3ed04a\` FOREIGN KEY (\`stateId\`) REFERENCES \`state\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`address_master\` ADD CONSTRAINT \`FK_9bbe97dc6df7a75cf97a95d6cd6\` FOREIGN KEY (\`cityId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_scarp_details\` ADD CONSTRAINT \`FK_b0d3d3af60c82b98c9350c906bd\` FOREIGN KEY (\`categoryId\`) REFERENCES \`product_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payout_master\` ADD CONSTRAINT \`FK_2b52e283755fee4ebb141f214b7\` FOREIGN KEY (\`scarpPaymentId\`) REFERENCES \`user_scarp_details\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`scarp_delivery\` ADD CONSTRAINT \`FK_a3f23ba7512f2a0d4c659864a99\` FOREIGN KEY (\`deliveryBoyId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`scarp_delivery\` ADD CONSTRAINT \`FK_ff4e5d99d5ec7b18165c198bd88\` FOREIGN KEY (\`scrapId\`) REFERENCES \`user_scarp_details\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`scarp_delivery\` ADD CONSTRAINT \`FK_6805657d29dfd82fca9f0839153\` FOREIGN KEY (\`pickUpAddressId\`) REFERENCES \`address_master\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`scarp_delivery\` ADD CONSTRAINT \`FK_75b8244bd876e26ef81d48e61e1\` FOREIGN KEY (\`deliveryAddressId\`) REFERENCES \`address_master\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`address_master_user_user\` ADD CONSTRAINT \`FK_6235987612b69a68fe64a158f3a\` FOREIGN KEY (\`addressMasterId\`) REFERENCES \`address_master\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`address_master_user_user\` ADD CONSTRAINT \`FK_5a46cdffa11eaa017977db57a06\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role_master_permission_permission_master\` ADD CONSTRAINT \`FK_107bd95fb8c86a9155b5b3aedcb\` FOREIGN KEY (\`roleMasterId\`) REFERENCES \`role_master\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_master_permission_permission_master\` ADD CONSTRAINT \`FK_8e55da14f473f7a26596b538b4f\` FOREIGN KEY (\`permissionMasterId\`) REFERENCES \`permission_master\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`role_master_permission_permission_master\` DROP FOREIGN KEY \`FK_8e55da14f473f7a26596b538b4f\``);
        await queryRunner.query(`ALTER TABLE \`role_master_permission_permission_master\` DROP FOREIGN KEY \`FK_107bd95fb8c86a9155b5b3aedcb\``);
        await queryRunner.query(`ALTER TABLE \`address_master_user_user\` DROP FOREIGN KEY \`FK_5a46cdffa11eaa017977db57a06\``);
        await queryRunner.query(`ALTER TABLE \`address_master_user_user\` DROP FOREIGN KEY \`FK_6235987612b69a68fe64a158f3a\``);
        await queryRunner.query(`ALTER TABLE \`scarp_delivery\` DROP FOREIGN KEY \`FK_75b8244bd876e26ef81d48e61e1\``);
        await queryRunner.query(`ALTER TABLE \`scarp_delivery\` DROP FOREIGN KEY \`FK_6805657d29dfd82fca9f0839153\``);
        await queryRunner.query(`ALTER TABLE \`scarp_delivery\` DROP FOREIGN KEY \`FK_ff4e5d99d5ec7b18165c198bd88\``);
        await queryRunner.query(`ALTER TABLE \`scarp_delivery\` DROP FOREIGN KEY \`FK_a3f23ba7512f2a0d4c659864a99\``);
        await queryRunner.query(`ALTER TABLE \`payout_master\` DROP FOREIGN KEY \`FK_2b52e283755fee4ebb141f214b7\``);
        await queryRunner.query(`ALTER TABLE \`user_scarp_details\` DROP FOREIGN KEY \`FK_b0d3d3af60c82b98c9350c906bd\``);
        await queryRunner.query(`ALTER TABLE \`address_master\` DROP FOREIGN KEY \`FK_9bbe97dc6df7a75cf97a95d6cd6\``);
        await queryRunner.query(`ALTER TABLE \`city\` DROP FOREIGN KEY \`FK_e99de556ee56afe72154f3ed04a\``);
        await queryRunner.query(`DROP INDEX \`IDX_8e55da14f473f7a26596b538b4\` ON \`role_master_permission_permission_master\``);
        await queryRunner.query(`DROP INDEX \`IDX_107bd95fb8c86a9155b5b3aedc\` ON \`role_master_permission_permission_master\``);
        await queryRunner.query(`DROP TABLE \`role_master_permission_permission_master\``);
        await queryRunner.query(`DROP INDEX \`IDX_5a46cdffa11eaa017977db57a0\` ON \`address_master_user_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_6235987612b69a68fe64a158f3\` ON \`address_master_user_user\``);
        await queryRunner.query(`DROP TABLE \`address_master_user_user\``);
        await queryRunner.query(`DROP TABLE \`scarp_delivery\``);
        await queryRunner.query(`DROP TABLE \`permission_master\``);
        await queryRunner.query(`DROP TABLE \`role_master\``);
        await queryRunner.query(`DROP TABLE \`img_master\``);
        await queryRunner.query(`DROP TABLE \`payout_master\``);
        await queryRunner.query(`DROP TABLE \`user_scarp_details\``);
        await queryRunner.query(`DROP TABLE \`product_category\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`address_master\``);
        await queryRunner.query(`DROP TABLE \`city\``);
        await queryRunner.query(`DROP TABLE \`state\``);
    }

}

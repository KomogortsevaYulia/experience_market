import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1671461165943 implements MigrationInterface {
    name = 'auto1671461165943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_token"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "date_token" TIMESTAMP`);
    }

}

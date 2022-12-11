import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1670779229781 implements MigrationInterface {
    name = 'auto1670779229781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "date_token" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_token"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1673369017159 implements MigrationInterface {
    name = 'auto1673369017159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_functions" ADD "linkInfoUser" character varying`);
        await queryRunner.query(`CREATE TYPE "public"."user_functions_status_enum" AS ENUM('take', 'not viewed', 'deny')`);
        await queryRunner.query(`ALTER TABLE "user_functions" ADD "status" "public"."user_functions_status_enum" NOT NULL DEFAULT 'not viewed'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_functions" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."user_functions_status_enum"`);
        await queryRunner.query(`ALTER TABLE "user_functions" DROP COLUMN "linkInfoUser"`);
    }

}

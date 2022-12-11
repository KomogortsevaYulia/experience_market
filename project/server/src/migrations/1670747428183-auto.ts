import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1670747428183 implements MigrationInterface {
    name = 'auto1670747428183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."events_status_enum" AS ENUM('created', 'not viewed', 'not created')`);
        await queryRunner.query(`ALTER TABLE "events" ADD "status" "public"."events_status_enum" NOT NULL DEFAULT 'not viewed'`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "type_events" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "type_project" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "type_project" SET DEFAULT 'training'`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "type_events" SET DEFAULT 'challenge'`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."events_status_enum"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1669910768564 implements MigrationInterface {
    name = 'auto1669910768564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "type_events" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "type_project" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "type_project" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "type_events" SET NOT NULL`);
    }

}

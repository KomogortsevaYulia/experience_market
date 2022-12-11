import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1670752785556 implements MigrationInterface {
    name = 'auto1670752785556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teams" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "team_size" character varying, CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "functions" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "team_id" integer, CONSTRAINT "PK_203889d2ae5a98ffc137739301e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_functions" ("id" SERIAL NOT NULL, "date_start" TIMESTAMP, "date_end" TIMESTAMP, "title" character varying, "user_id" integer, "function_id" integer, CONSTRAINT "PK_1b04a9e32d9511b33fe11b6ffda" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "functions" ADD CONSTRAINT "FK_579f1e0cdab39bd43464fb882be" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_functions" ADD CONSTRAINT "FK_414c47660792aa509c8f55adc7f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_functions" ADD CONSTRAINT "FK_bc78d14d218fc2e57e7a6941ab3" FOREIGN KEY ("function_id") REFERENCES "functions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_functions" DROP CONSTRAINT "FK_bc78d14d218fc2e57e7a6941ab3"`);
        await queryRunner.query(`ALTER TABLE "user_functions" DROP CONSTRAINT "FK_414c47660792aa509c8f55adc7f"`);
        await queryRunner.query(`ALTER TABLE "functions" DROP CONSTRAINT "FK_579f1e0cdab39bd43464fb882be"`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`DROP TABLE "user_functions"`);
        await queryRunner.query(`DROP TABLE "functions"`);
        await queryRunner.query(`DROP TABLE "teams"`);
    }

}

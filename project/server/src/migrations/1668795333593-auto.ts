import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1668795333593 implements MigrationInterface {
    name = 'auto1668795333593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("title" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_25cae3ff755adc0abe5ca284092" PRIMARY KEY ("title"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}

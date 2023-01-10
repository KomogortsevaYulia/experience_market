import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1673368721299 implements MigrationInterface {
    name = 'auto1673368721299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "results_event" ("id" SERIAL NOT NULL, "link_solution" character varying, "feedback" character varying, "images" text NOT NULL, "place" integer, "event_id" integer, "team_id" integer, CONSTRAINT "REL_d8642237c1992bf728a8ca7a62" UNIQUE ("event_id"), CONSTRAINT "REL_08554b70594948cdb7d345ffdf" UNIQUE ("team_id"), CONSTRAINT "PK_1d5dc8f6abf1b3ce3c044dfb7c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "voting" ("id" SERIAL NOT NULL, "date" TIMESTAMP, "title_criterion" character varying, "score" integer, "comments" character varying, "user_id" integer, "result_event_id" integer, CONSTRAINT "REL_21e14b50ffc71d7ef04de7affd" UNIQUE ("user_id"), CONSTRAINT "REL_4f7fec260b3d880f48993fe798" UNIQUE ("result_event_id"), CONSTRAINT "PK_2dff1e5c53fa2cc610bea30476c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "results_event" ADD CONSTRAINT "FK_d8642237c1992bf728a8ca7a62d" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "results_event" ADD CONSTRAINT "FK_08554b70594948cdb7d345ffdfa" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voting" ADD CONSTRAINT "FK_21e14b50ffc71d7ef04de7affde" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voting" ADD CONSTRAINT "FK_4f7fec260b3d880f48993fe7986" FOREIGN KEY ("result_event_id") REFERENCES "results_event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "voting" DROP CONSTRAINT "FK_4f7fec260b3d880f48993fe7986"`);
        await queryRunner.query(`ALTER TABLE "voting" DROP CONSTRAINT "FK_21e14b50ffc71d7ef04de7affde"`);
        await queryRunner.query(`ALTER TABLE "results_event" DROP CONSTRAINT "FK_08554b70594948cdb7d345ffdfa"`);
        await queryRunner.query(`ALTER TABLE "results_event" DROP CONSTRAINT "FK_d8642237c1992bf728a8ca7a62d"`);
        await queryRunner.query(`DROP TABLE "voting"`);
        await queryRunner.query(`DROP TABLE "results_event"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1669910496815 implements MigrationInterface {
    name = 'auto1669910496815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_gender_enum" AS ENUM('male', 'female')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "last_name" character varying NOT NULL, "name" character varying NOT NULL, "patronymic" character varying, "username" character varying NOT NULL, "birthdate" TIMESTAMP, "phone" character varying, "email" character varying NOT NULL, "gender" "public"."users_gender_enum" NOT NULL DEFAULT 'male', "permission" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."events_type_enum" AS ENUM('event', 'project', 'hackaton')`);
        await queryRunner.query(`CREATE TYPE "public"."events_type_events_enum" AS ENUM('competition', 'challenge')`);
        await queryRunner.query(`CREATE TYPE "public"."events_type_project_enum" AS ENUM('training', 'unique')`);
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "type" "public"."events_type_enum" NOT NULL DEFAULT 'event', "type_events" "public"."events_type_events_enum" NOT NULL DEFAULT 'challenge', "type_project" "public"."events_type_project_enum" NOT NULL DEFAULT 'training', "images" text NOT NULL, "descriptions" character varying NOT NULL, "date_start" TIMESTAMP NOT NULL, "date_end" TIMESTAMP, "team_size" character varying, "last_time_registration" TIMESTAMP, "prize" character varying, "creator_id" integer, "tags" integer, CONSTRAINT "REL_39f98b48445861611ea1710807" UNIQUE ("creator_id"), CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_39f98b48445861611ea17108071" FOREIGN KEY ("creator_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_e42a2576d951f7ecc17787e5cb7" FOREIGN KEY ("tags") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_e42a2576d951f7ecc17787e5cb7"`);
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_39f98b48445861611ea17108071"`);
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`DROP TYPE "public"."events_type_project_enum"`);
        await queryRunner.query(`DROP TYPE "public"."events_type_events_enum"`);
        await queryRunner.query(`DROP TYPE "public"."events_type_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}

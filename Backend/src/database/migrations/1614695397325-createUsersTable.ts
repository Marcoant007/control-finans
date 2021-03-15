import { MigrationInterface, QueryRunner } from "typeorm";

export class createUsersTable1614695397325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table users (
                id serial not null,
                name varchar(255),
                email varchar(255),
                password varchar(255),
                salary real,
                constraint pk_users primary key(id)
            )`);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE users
        `)
    }

}

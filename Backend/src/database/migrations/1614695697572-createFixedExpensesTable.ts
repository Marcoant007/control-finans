import { MigrationInterface, QueryRunner } from "typeorm";

export class createFixedExpensesTable1614695697572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            create table fixed_expenses(
                id serial not null,
                name varchar(255),
                value int not null,
                user_id int not null,
                date timestamptz not null DEFAULT CURRENT_TIMESTAMP,
                constraint pk_fixed_expenses primary key (id),
                constraint fk_user_fixed foreign key (user_id) references users(id)
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP Table fixed_expenses
        `)
    }

}

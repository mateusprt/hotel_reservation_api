import { MigrationInterface, QueryRunner, TableIndex } from "typeorm"

export class CreateIndexOnUsers1677606819520 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createIndex('users', new TableIndex({
				name: 'IDX_confirmation_token',
				columnNames: ['confirmation_token']
			}))
		}

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropIndex('users', "IDX_confirmation_token")
    }

}

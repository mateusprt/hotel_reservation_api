import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsers1677606006328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment'
					},
					{
						name: 'email',
						type: 'varchar(150)',
						isUnique: true
					},
					{
						name: 'password_hash',
						type: 'varchar'
					},
					{
						name: 'confirmation_token',
						type: 'varchar',
						isNullable: true
					},
					{
						name: 'confirmation_token_sent_at',
						type: 'timestamp',
						isNullable: true
					},
					{
						name: 'confirmed_at',
						type: 'timestamp',
						isNullable: true
					},
					{
						name: 'reset_password_token',
						type: 'varchar',
						isNullable: true
					},
					{
						name: 'reset_password_token_sent_at',
						type: 'timestamp',
						isNullable: true
					},
					{
						name: 'unconfirmed',
						type: 'boolean',
						default: true
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()'
					},
				]
			}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('users')
    }

}

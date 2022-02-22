// import { MigrationInterface, QueryRunner } from 'typeorm';
//
// export class CreateTableUsers1645549104059 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`
//       CREATE TABLE IF NOT EXISTS myUsers (
//         id INT PRIMARY KEY AUTO_INCREMENT,
//         firstName VARCHAR(250) NOT NULL,
//         lastName VARCHAR(250) NOT NULL
//       )
//     `);
//   }
//
//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`
//       DROP TABLE IF EXISTS myUsers
//     `);
//   }
// }

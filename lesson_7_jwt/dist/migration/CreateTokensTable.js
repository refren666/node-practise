"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTokensTable1647718109369 = void 0;
class CreateTokensTable1647718109369 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Tokens (
                id INT PRIMARY KEY AUTO_INCREMENT,
                refreshToken VARCHAR(250) NOT NULL,
                userId INT NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP,
                FOREIGN KEY (userId) REFERENCES Users (id)
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Tokens
        `);
    }
}
exports.CreateTokensTable1647718109369 = CreateTokensTable1647718109369;
//# sourceMappingURL=CreateTokensTable.js.map
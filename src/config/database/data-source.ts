import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'mysql',
  host: process.env.DBHOST,
  port: +process.env.DBPORT,
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
  dropSchema: false,
  logging: false,
  logger: 'file',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/config/database/migrations/**/*.ts'],
  migrationsTableName: 'migration_table',
});

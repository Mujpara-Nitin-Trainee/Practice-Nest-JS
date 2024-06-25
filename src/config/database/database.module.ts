import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (ConfigService: ConfigService) => ({
        type: 'mysql',
        host: ConfigService.getOrThrow('DBHOST'),
        port: ConfigService.getOrThrow('DBPORT'),
        username: ConfigService.getOrThrow('DBUSER'),
        password: ConfigService.getOrThrow('DBPASS'),
        database: ConfigService.getOrThrow('DBNAME'),
        entities: [__dirname + 'src/**/*.entity.ts'],
        migrations: [__dirname + 'src/config/database/migrations/**/*.ts'],
        autoLoadEntities: true,
        migrationsTableName: 'migration_table',
        logging: ["error", "warn"]
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule { }

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DATABASE_CONFIG } from './config';

const {
  DIALECT,
  HOST,
  PORT,
  USERNAME,
  PASSWORD,
  DATABASE
} = DATABASE_CONFIG;

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: DIALECT,
      host: HOST,
      port: PORT,
      username: USERNAME,
      password: PASSWORD,
      database: DATABASE,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

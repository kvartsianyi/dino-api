import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';

import { API_CONFIG } from './config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));

  await app.listen(API_CONFIG.PORT);
}
bootstrap();

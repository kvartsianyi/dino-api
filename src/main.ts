import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';
import * as config from 'config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));

  await app.listen(config.get('port'));
}
bootstrap();

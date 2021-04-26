import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';

import { API_CONFIG } from './config';
import { AppModule } from './app.module';

const { PORT } = API_CONFIG;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));

  // eslint-disable-next-line no-console
  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
}
bootstrap();

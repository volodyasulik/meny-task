const dotenvFlow = require('dotenv-flow');
import { ValidationPipe } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  dotenvFlow.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableShutdownHooks();
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  await app.listen(process.env['PORT'] ?? 8080);
}
bootstrap();

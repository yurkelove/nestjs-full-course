import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { setupSwagger } from './utils/swagger.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe());

  setupSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();

//Websoket - постоянное соеденение с сервером и обмен данными в реальном времени без повторных запросов

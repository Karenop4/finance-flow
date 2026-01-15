import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Habilitar CORS
  app.enableCors();

  // 2. Activar validaciones globales (para los DTOs)
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001); // Puerto 3001
  console.log('Backend corriendo en: http://localhost:3001');
}
bootstrap();
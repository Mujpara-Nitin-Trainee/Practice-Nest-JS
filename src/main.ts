import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');

  const apiPath = 'api';
  app.setGlobalPrefix(apiPath);

  const options = new DocumentBuilder()
    .addBearerAuth(
      {
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'JWT',
        bearerFormat: 'JWT',
        scheme: 'Bearer',
        type: 'http',
        in: 'header'
      }, 'JWT-auth')
    .setTitle('Nest-js Swagger Example API')
    .setDescription('Swagger Example API Description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${apiPath}/docs`, app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}
bootstrap();

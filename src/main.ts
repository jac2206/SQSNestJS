import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validateConfigValues } from './modules/consumer-sqs/Infrastructure/Config/validation-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  validateConfigValues(configService);
  const port = configService.get<number>('AppConfiguration.port');
  Logger.log(
    `(): Server running on port: ${port} with environment: ${process.env.NODE_ENV}`,
  );
  await app.listen(3200);
}
bootstrap();

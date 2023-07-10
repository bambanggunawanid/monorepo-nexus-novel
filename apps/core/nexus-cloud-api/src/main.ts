import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const host = process.env.HOST || 'localhost';
    const port = process.env.PORT || 3000;
    await app.listen(port);
    Logger.log(
        `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`
    );
    Logger.log(`Running in ${config.get('environment')} mode`);
    Logger.log(`Listening at http://${host}:${port}/graphql`, 'GraphQL')
}

bootstrap();

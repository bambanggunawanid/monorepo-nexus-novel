import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );
    const globalPrefix = 'api';

    const port = process.env.PORT || 3002;
    const address = process.env.ADDRESS || '127.0.0.1';

    const config = new DocumentBuilder()
        .setTitle('Nexus API')
        .setDescription('Nexus API for the Nexus App Files Archive')
        .setVersion('1.0')
        .addTag('nexus-api')
        .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/', app, document);
    app.setGlobalPrefix(globalPrefix);
    await app.listen(port, address);
    Logger.log(
        `🚀 Application is running on: http://${address}:${port}/${globalPrefix}`
    );
}

bootstrap();

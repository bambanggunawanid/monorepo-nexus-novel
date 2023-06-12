import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { File } from './files/entities/file.entity';
import { FilesModule } from './files/files.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: 'secret',
            database: 'nexus',
            entities: [User, File],
            synchronize: true,
        }),
        UsersModule,
        FilesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

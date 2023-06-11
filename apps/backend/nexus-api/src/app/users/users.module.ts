import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Users } from './users';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService, Users],
    controllers: [UsersController],
})
export class UsersModule {}

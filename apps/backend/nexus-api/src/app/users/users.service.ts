import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.input';

@Injectable()
export class UsersService {
    async findOne(id: number) {
        return 'This action returns a user' + id;
    }

    async findAll() {
        return 'This action returns all users';
    }

    async findProfile() {
        return 'This action returns a user profile';
    }

    async findProfileFiles() {
        return 'This action returns a user profile files';
    }

    async create() {
        return 'This action creates a user';
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return 'This action updates a user' + id + updateUserDto;
    }

    async remove(id: number) {
        return 'This action deletes a user' + id;
    }
}

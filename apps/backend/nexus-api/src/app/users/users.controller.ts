import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.input';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers() {
        return 'This action returns all users';
    }

    @Get(':id')
    async getUser(@Param('id') id: number): Promise<string> {
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.usersService.remove(+id);
    }
}

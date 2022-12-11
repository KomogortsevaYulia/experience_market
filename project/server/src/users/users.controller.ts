import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, HttpException, Put, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth, ApiTags
} from '@nestjs/swagger';
import { User } from './user.decorator';
import { LoginUserDto } from './dto/login-user.dto';
import { UserRO } from './user.interface';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findMe(@User('email') email: string): Promise<UserRO> {
    return await this.usersService.findByEmail(email);
  }

  @Put()
  async update(@User('id') userId: number, @Body('user') userData: UpdateUserDto) {
    return await this.usersService.update(userId, userData);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body('user') userData: CreateUserDto) {
    return this.usersService.create(userData);
  }

  @Delete(':slug')
  async delete(@Param() params) {
    return await this.usersService.delete(params.slug);
  }

  @UsePipes(new ValidationPipe())
  @Post('/login')
  async login(@Body('user') loginUserDto: LoginUserDto): Promise<UserRO> {
    const _user = await this.usersService.findOne(loginUserDto);

    const errors = {User: ' not found'};
    if (!_user) throw new HttpException({errors}, 401);

    const token = await this.usersService.generateJWT(_user);
    const {email, username,permission,id} = _user;
    const user = {email, token, username,permission,id};
    return {user}
  }
}

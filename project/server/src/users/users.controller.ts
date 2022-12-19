import { Controller, Get, Post, Request, Body, Patch, Param, Delete, ValidationPipe, HttpException, Put, UsePipes, UseGuards, UnauthorizedException, Response, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth, ApiTags
} from '@nestjs/swagger';

import { LocalAuthGuard } from 'src/users/local-auth.guard';
import { User } from 'src/entities/user.entity';
import { combineLatestWith } from 'rxjs';



@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(LocalAuthGuard)
  @Get('/user')
  async findOne(@Request() req): Promise<any> {
    const user=await this.usersService.findById(req.session.user_id)
    const { password, ...result } = user;
    return result;
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Request() req,@Body('user') userData: CreateUserDto) {

    const user=await this.usersService.create(userData)
    if (user) {
      req.session.user_id = user.id;
      req.session.logged = true;
      return user;
    }
    else{
        throw new UnauthorizedException();
    }
  }
  
  @Post('/login')
  async login(@Request() req) {
    const pass = req.body.user.password
    const email = req.body.user.email
    const user = await this.usersService.login(email, pass)

    if (user) {
      req.session.user_id = user.id;
      req.session.logged = true;
      return user;
    }
    else{
        throw new UnauthorizedException();
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('/logout')
  async logout(@Request() req) {
    req.session.logged = false;
    return true;
  }
}

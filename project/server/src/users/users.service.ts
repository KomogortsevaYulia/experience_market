import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { DeleteResult, getRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from 'argon2';
const jwt = require('jsonwebtoken');
import { SECRET } from '../config';
import { validate } from 'class-validator';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)  // user //,
    private readonly usersRepository: Repository<User>,
  ) { }

  async create(dto: CreateUserDto): Promise<User> {

    // check uniqueness of username/email
    const {username, email, password} = dto;
    const qb = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .orWhere('user.email = :email', { email });

    const user = await qb.getOne();

    if (user) {
      const errors = {username: 'Username and email must be unique.'};
      throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);

    }

    // create new user
    let newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.permission = [];
 
    const errors = await validate(newUser);
    if (errors.length > 0) {
      const _errors = {username: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedUser = await this.usersRepository.save(newUser);
      return savedUser;
    }

  }

  async login(email: string, pass: string): Promise<User> {

    const user = await this.findOne(email);

    if (user && await argon2.verify(user.password, pass)) {
      const { password, ...result } = user;
      
      return result;
    } else {
      return null;
    }
  }

  async findById(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id: id });
    return user;
  }

  async findOne(email: string): Promise<any> {
    return this.usersRepository.findOneBy({ email: email });
  }
}

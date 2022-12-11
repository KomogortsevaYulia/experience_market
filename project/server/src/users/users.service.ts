import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { DeleteResult, getRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from 'argon2';
const jwt = require('jsonwebtoken');
import { SECRET } from '../config';
import { UserRO } from './user.interface';
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

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne({email, password}: LoginUserDto): Promise<User> {
    const user = await this.usersRepository.findOneBy({email:email});
    if (!user) {
      return null;
    }

    if (await argon2.verify(user.password, password)) {
      return user;
    }

    return null;
  }

  async create(dto: CreateUserDto): Promise<UserRO> {

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
      return this.buildUserRO(savedUser);
    }

  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    let toUpdate = await this.usersRepository.findOneBy({id:id});
    delete toUpdate.password;
    // delete toUpdate.favorites;

    let updated = Object.assign(toUpdate, dto);
    return await this.usersRepository.save(updated);
  }

  async delete(email: string): Promise<DeleteResult> {
    return await this.usersRepository.delete({ email: email});
  }

  async findById(id: number): Promise<UserRO>{
    const user = await this.usersRepository.findOneBy({id:id});

    if (!user) {
      const errors = {User: ' not found'};
      throw new HttpException({errors}, 401);
    }

    return this.buildUserRO(user);
  }

  async findByEmail(email: string): Promise<UserRO>{
    const user = await this.usersRepository.findOneBy({email:email});
    return this.buildUserRO(user);
  }

  public generateJWT(user) {
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 10);
    return jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email,
      exp: exp.getTime() / 1000,
    }, SECRET);
  };

  private buildUserRO(user: User) {
    const userRO = {
      id: user.id,
      username: user.username,
      email: user.email,
      token: this.generateJWT(user),
      permission: user.permission
    };

    return {user: userRO};
  }
}

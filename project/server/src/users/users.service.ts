import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)  // user //,
    private readonly usersRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) : Promise<User>{
    const user = new User();
    user.last_name = createUserDto.last_name;
    user.name = createUserDto.name;
    user.patronymic = createUserDto.patronymic;
    user.email = createUserDto.email;
    user.gender = createUserDto.gender;
    user.username = createUserDto.username;
    user.phone = createUserDto.phone;
    user.permission = createUserDto.permission;
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id: id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

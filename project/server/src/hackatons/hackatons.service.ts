import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHackatonDto } from './dto/create-hackaton.dto';
import { UpdateHackatonDto } from './dto/update-hackaton.dto';

@Injectable()
export class HackatonsService {
  constructor(
    @InjectRepository(Event)
    private readonly hackatonRepository: Repository<Event>,
  ) { }

  create(createHackatonDto: CreateHackatonDto) {
    return 'This action adds a new hackaton';
  }

  async findAll(): Promise<Event[]> {
    return this.hackatonRepository.createQueryBuilder("events").where("events.type = :type", { type: "hackaton" }).getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} hackaton`;
  }

  update(id: number, updateHackatonDto: UpdateHackatonDto) {
    return `This action updates a #${id} hackaton`;
  }

  remove(id: number) {
    return `This action removes a #${id} hackaton`;
  }
}

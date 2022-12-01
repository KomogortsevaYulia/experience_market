import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/entities/event.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  
  constructor(
    @InjectRepository(Event)  // user //,
    private readonly projectsRepository: Repository<Event>,
  ) { }
  
  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  async findAll(): Promise<Event[]> {
    return this.projectsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
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

  async create(createProjectDto: CreateProjectDto) {
    // create new user
    let newProject = new Event();
    newProject.descriptions = createProjectDto.description;
    newProject.type ="project";
    newProject.status ="not viewed";
    newProject.date_start =new Date;
    newProject.title = createProjectDto.title;
    newProject.images = [createProjectDto.image];
    newProject.type_project = createProjectDto.type_project;
    newProject.creator=createProjectDto.creator_id

    const errors = await validate(newProject);
    if (errors.length > 0) {
      const _errors = {username: 'ProjectInput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);
    } else {
      const savedProject = await this.projectsRepository.save(newProject);
      return this.buildUserRO(savedProject);
    }

  }

  async findAll(): Promise<Event[]> {
    return this.projectsRepository
      .createQueryBuilder("events")
      .where("events.type = :type", { type: "project" })
      .andWhere("events.status = :status", { status: "created" })
      .getMany();
  }

  async findRequestCreateProject(): Promise<Event[]> {
    return this.projectsRepository
      .createQueryBuilder("events")
      .where("events.type = :type", { type: "project" })
      .getMany();
  }

  async findCountRequestCreateProject(): Promise<Number> {
    return this.projectsRepository
      .createQueryBuilder("events")
      .where("events.type = :type", { type: "project" })
      .andWhere("events.status = :status", { status: "not viewed" })
      .getCount();
  }

  findOne(id: number) {
    return this.projectsRepository.createQueryBuilder("events").where("events.id = :id", { id: id }).getOne();
  }

  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<Event[]> {
    
    this.projectsRepository.update(id, { status: updateProjectDto.status })
    return this.findRequestCreateProject();
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }

  private buildUserRO(project: Event) {
    const projectRO = {
      id: project.id,
      title: project.title,
      type_project: project.type_project,
      descriptions:project.descriptions,
      images:project.images,
    };

    return {project: projectRO};
  }

  
}
export interface ProjectData {
    username: string;
    email: string;
    token: string;
  }
  
  export interface ProjectRO {
    user: ProjectData;
  }
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Event } from 'src/entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event]),UserModule],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}

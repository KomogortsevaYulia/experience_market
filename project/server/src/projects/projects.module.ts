import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Event } from 'src/entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from 'src/users/users.module';
import { User } from 'src/entities/user.entity';
import { Team } from 'src/entities/teams.entity';
import { ResultEvent } from 'src/entities/result_events.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event,Team,ResultEvent]),UserModule],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}

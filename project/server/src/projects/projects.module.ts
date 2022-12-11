import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Event } from 'src/entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from 'src/users/auth.middleware';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event]),UserModule],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        {path: 'projects/requestCreateProject', method: RequestMethod.GET},
        {path: 'projects/requestCreateProject/count', method: RequestMethod.GET},
        {path: 'projects/:id', method: RequestMethod.PATCH},
        {path: 'projects', method: RequestMethod.POST},);
  }
}

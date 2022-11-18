import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CONNECTION from './db.connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { AchievementsModule } from './achievements/achievements.module';
import { HackatonsModule } from './hackatons/hackatons.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    //@ts-ignore
    TypeOrmModule.forRoot({
      ...CONNECTION,
      synchronize: false,
      autoLoadEntities: true
    }),
    
    UsersModule,
    
    ProjectsModule,
    
    AchievementsModule,
    
    HackatonsModule,
    
    EventsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

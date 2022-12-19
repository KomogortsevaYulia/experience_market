import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { LocalAuthGuard } from './local-auth.guard';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, LocalAuthGuard],
  controllers: [ 
    UsersController
  ],
  exports: [UsersService]
})
export class UserModule {}
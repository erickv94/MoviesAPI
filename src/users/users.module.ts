import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}

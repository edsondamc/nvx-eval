import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [Logger, UserService, UserResolver],
})
export class UserModule {}

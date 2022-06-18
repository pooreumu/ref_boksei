import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PoliciesModule } from './policies/policies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UsersModule, PoliciesModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoliciesController } from './policies.controller';
import { PoliciesService } from './policies.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [PoliciesController],
  providers: [PoliciesService],
})
export class PoliciesModule {}

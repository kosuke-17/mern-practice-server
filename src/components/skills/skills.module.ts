import { Module } from '@nestjs/common';
import { SkillsResolver } from './skills.resolver';
import { SkillsService } from './skills.service';

@Module({
  imports: [],
  providers: [SkillsService, SkillsResolver],
  exports: [SkillsService],
})
export class SkillsModule {}

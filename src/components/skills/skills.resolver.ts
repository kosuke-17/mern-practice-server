import { Query, Resolver } from '@nestjs/graphql';
import { SkillsService } from './skills.service';

@Resolver()
export class SkillsResolver {
  constructor(private skillsService: SkillsService) {}

  @Query((returns) => String)
  public async skills() {
    return 'クエリの表示';
  }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewSkillInput } from './dto/new-skill.input';
import { Skill } from './entities/skill';
import { SkillsService } from './skills.service';

@Resolver()
export class SkillsResolver {
  constructor(private skillsService: SkillsService) {}
  /**
   * サービスによる技術一覧の取得処理
   */
  @Query(() => [Skill])
  public async skills(): Promise<Skill[]> {
    return await this.skillsService.getAllSkills().catch((err) => {
      throw err;
    });
  }
  @Mutation(() => Skill)
  public async addNewCar(
    @Args('newSkillData') newSkillDdata: NewSkillInput,
  ): Promise<Skill> {
    return await this.skillsService.addSkill(newSkillDdata).catch((err) => {
      throw err;
    });
  }
}

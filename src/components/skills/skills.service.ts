import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewSkillInput } from './dto/new-skill.input';
import { Skill } from './entities/skill';

@Injectable()
export class SkillsService {
  // @InjectRepository : skillRepositoryをSkillsServiceにインジェクションする
  constructor(
    @InjectRepository(Skill) private skillRepository: Repository<Skill>,
  ) {}

  /**
   * 技術一覧情報を取得する
   * @returns 技術一覧情報
   */
  public async getAllSkills(): Promise<Skill[]> {
    return await this.skillRepository.find({}).catch(() => {
      throw new InternalServerErrorException();
    });
  }

  public async addSkill(newSkillData: NewSkillInput): Promise<Skill> {
    const newSkill = this.skillRepository.create(newSkillData);
    await this.skillRepository.save(newSkill).catch(() => {
      new InternalServerErrorException();
    });
    return newSkill;
  }
}

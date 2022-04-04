import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewSkillInput {
  // NOT NULL 制約をここで利用
  @Field({ nullable: true })
  name: string;
  @Field()
  img: string;
  @Field()
  content: string;
  // リターンのタイプを指定
  @Field(() => Int)
  @Max(10000)
  @Min(1, { message: '学習時間は1以上の数値を入力してください' })
  stackTime: number;
}

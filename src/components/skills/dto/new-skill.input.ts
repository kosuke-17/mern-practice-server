import { Field, InputType, Int } from '@nestjs/graphql';

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
  stackTime: number;
}

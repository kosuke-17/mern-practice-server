import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//  Entityの名前はDBのテーブル名と対応
@Entity({ name: 'skills' })
@ObjectType()
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  img: string;

  @Column()
  @Field()
  content: string;

  @Column()
  @Field()
  stackTime: number;
}

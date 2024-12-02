import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  code?: string;

  @Column()
  @Field()
  emoji: string;

  @Column()
  continentCode: string;

  constructor(
    name: string,
    code: string,
    emoji: string,
    continentCode: string
  ) {
    super();

    this.name = name;
    this.code = code;
    this.emoji = emoji;
    this.continentCode = continentCode;
  }
}

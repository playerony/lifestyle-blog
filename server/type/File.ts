import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class File {
  @Field()
  id!: number

  @Field()
  path!: string

  @Field()
  filename!: string

  @Field()
  mimetype!: string

  @Field()
  encoding!: string
}

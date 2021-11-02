import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String, { description: 'id of the author' })
    authorId: string;

    @Column()
    @Field(() => String, { description: 'first name of the author' })
    firstName: string;

    @Column()
    @Field(() => String, { description: 'last name of the author' })
    lastName: string;

    // @Column()
    // @Field()
    // birthday: Date;
}
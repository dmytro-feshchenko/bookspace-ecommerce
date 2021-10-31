import { Field, InputType } from '@nestjs/graphql';
// import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class CreateAuthorInput {
    @Field(() => String, { description: 'first name of the author' })
    firstName: string;

    @Field(() => String, { description: 'last name of the author' })
    lastName: string;
}
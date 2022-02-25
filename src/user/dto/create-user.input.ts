/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreateUserInput{
       @IsAlpha()
        @Field()
        nom:string;
        @IsAlpha()
         @Field()
        prenom:string;
         @Field()
         @IsEmail()
         @IsNotEmpty()
        email:string;
        @MinLength(6)
        @MaxLength(10)
         @Field()
        password:string;
         @IsAlpha()
         @Field()
        ville:string;
         @IsAlpha()
         @Field()
        pays:string;
}
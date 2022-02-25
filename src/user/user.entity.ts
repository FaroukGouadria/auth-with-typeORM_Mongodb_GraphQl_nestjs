/* eslint-disable prettier/prettier */
import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
@ObjectType()
export class User{
    @ObjectIdColumn()
    @Field(()=>ID)
     _id:string;
     @Column()
     @Field()
     nom :string;
         @Column()
     @Field()
     @Column()
     prenom:string;
     @Field()
     @Column()
     email:string;
     @Field()
     @Column()
     password:string;
     @Field()
     @Column()
     pays:string
     @Field()
      @Column()
     ville:string;
     @Field()
    @CreateDateColumn()
     createdAt:Date;
     @Field()
  @UpdateDateColumn()
     updatedAt:Date;
}
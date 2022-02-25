/* eslint-disable prettier/prettier */
import { UseGuards } from "@nestjs/common";
import {Args, ID, Mutation, Query, Resolver} from "@nestjs/graphql";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import {CreateUserInput} from "./dto/create-user.input";
import {User} from "./user.entity";
import {UserService} from "./user.service";

@Resolver(User)
export class UserResolver {
  constructor(private userService : UserService) {}

  @Query(() => [User])
  @UseGuards(JwtAuthGuard)
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }
  @Mutation(() => User)
  createUser(@Args("createUserInput")createUserInput : CreateUserInput): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @Query(() => User)
  findUser(@Args("_id", {
    type: () => ID
  })_id : string): Promise<User> {
    return this.userService.findOne(_id);
  }
  @Query(()=>User)
  async findUserByEmail(@Args('email') email:string):Promise<User>{
    return this.userService.findByEmail(email);
  }
}

/* eslint-disable prettier/prettier */
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-reponse';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
    constructor(
        private authService:AuthService
    ){}

    @Mutation(()=>LoginResponse)
    //  @UseGuards(GqlAuthGuard)    
    Login(@Args('loginUserInput') loginUserInput:LoginUserInput){
        return this.authService.login(loginUserInput);
    }
    
}

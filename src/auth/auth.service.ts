/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
    constructor(
        private userService:UserService,
        private jwtService:JwtService
    ){}

    async validateUser(email:string,password:string):Promise<any>{
        const user = await this.userService.findByEmail(email);
        if(user && user.password===password){
                const{password, ...result}=user;
                return result;
        }
        return null;
    }
    async login(loginUserInput:LoginUserInput){
        const user = await this.userService.findByEmail(loginUserInput.email);
        const {email,password}=loginUserInput;
       
        return{
           access_token:this.jwtService.sign({email,password}),
            user,

        }
    }
}

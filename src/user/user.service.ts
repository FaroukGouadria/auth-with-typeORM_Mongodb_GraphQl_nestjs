/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository:Repository<User>
    ){

    }

    async create(createUserInput:CreateUserInput):Promise<User>{
        const newUser=this.userRepository.create(createUserInput);
        return this.userRepository.save(newUser);
    }

    async findAll():Promise<User[]>{
        return this.userRepository.find();
    }
    async findOne(_id:string):Promise<User>{
        return this.userRepository.findOne(_id);
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({ email });
    }
}

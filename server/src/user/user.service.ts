import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    getOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    findById(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    findByName(name: string): Promise<User> {
        return this.usersRepository.findOne({name});
    }

    async add(user: User): Promise<void> {
        await this.usersRepository.save(user);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}

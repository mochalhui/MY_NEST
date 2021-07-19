import { Injectable } from '@nestjs/common';
import { ProjectEntity } from 'src/project/project.entity';
import { IUserService } from './IUserService';
import { CreateUserDTo } from './models/CreateUserDto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService implements IUserService{
    public async findAll(): Promise<UserEntity[]> {
        return await UserEntity.findAll();
    }

    public async createUser(user: CreateUserDTo): Promise<UserEntity> {
        return await UserEntity.createUser(user);
    }

    public async getProjectsForUser(user: UserEntity): Promise<ProjectEntity[]> {
        return undefined;
    }
}

import { ProjectEntity } from "src/project/project.entity";
import { CreateUserDTo } from "./models/CreateUserDto";
import { UserEntity } from "./user.entity";

export interface IUserService {
    findAll(): Promise<UserEntity[]>,
    createUser(user: CreateUserDTo): Promise<UserEntity>,
    getProjectsForUser(user: UserEntity): Promise<ProjectEntity[]>
}
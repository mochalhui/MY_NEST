import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';
import { ProjectEntity } from './project.entity';

@Injectable()
export class ProjectService {
    public async getProjectsForUser(user: UserEntity): Promise<ProjectEntity[]> {
        return ProjectEntity.getProjects(user);
    }
    public async createProject(projects: CreateProjectDto[], user: UserEntity): Promise<ProjectEntity[]> {
        return ProjectEntity.createProjects(projects, user);
 }
 
}

import { Body, Controller, Get, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ProjectEntity } from './project.entity';
import {CreateProjectDto} from './models/CreateProjectDto';
import { SessionGuard } from 'src/auth/seesionGuard';
import { ProjectService } from './project.service';
import { SessionUser } from 'src/user/user.decorator';
import { UserEntity } from 'src/user/user.entity';
@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Post('')
    @UseGuards(SessionGuard)
   // @ApiOperation({title: 'Create a project for the logged in user'})
    public async createProject(@Body() createProjects: CreateProjectDto[], @Res() res, @SessionUser() user: UserEntity) {
        const projects: ProjectEntity[] = await this.projectService.createProject(createProjects, user);
        return res.status(HttpStatus.OK).send(projects);
    }

@Get('')
@UseGuards(SessionGuard)
//@ApiOperation({title: 'Get Projects for User'})
public async getProjects(@Res() res, @SessionUser() user: UserEntity) {
    const projects: ProjectEntity[] = await this.projectService.getProjectsForUser(user);
    return res.status(HttpStatus.OK).send(projects);
}
}

   
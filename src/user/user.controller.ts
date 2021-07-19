import { Body, Controller, Get, HttpStatus, Post, Req, Res, Session } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDTo } from './models/CreateUserDto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) {}

    @Get('')
   // @ApiOperation({title:'Get List of All Users'})
    @ApiResponse({status:200,description:'User Found'})
    @ApiResponse({status:404,description:'No Users found.'})
    public async getAllUsers(@Req() req,@Res() res, @Session() session) {
        const users: UserEntity[] = await this.usersService.findAll();
        return res.status(HttpStatus.OK).send(users);
    }

    @Post('')
  //  @ApiOperation({title:'Create User'})
    public async create(@Body() createUser: CreateUserDTo, @Res() res) {
        await this.usersService.createUser(createUser);
        return res.status(HttpStatus.CREATED).send();
    }

    @Post('login')
    @ApiBearerAuth()
    public async login(@Req() req,@Res() res, @Session() session) {
        return res.status(HttpStatus.OK).send();
    }

    
}

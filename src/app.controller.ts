import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
@Controller('cats')
export class CatsController{

  @Post()
  create():string{
    return 'This action adds a new cat'
  }
  @Get()
  findAll(@Req() request: Request): string{
    return 'This action returns all cats';
  }
  @Get('ab*cd')
  getAll():string{
    return 'hihi'
  }
}

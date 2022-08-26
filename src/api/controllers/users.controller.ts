import { Controller, Get, Post, Param, Body, HttpStatus, Delete, UseInterceptors } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { ValidatorInterceptor } from '../interceptors/validate.interceptor'
import { UserContract  } from '../contracts/user.contract';

@Controller('v1/users')
export class UserController {
  constructor(private readonly service: UserService) { }

  @Get(':id')
  async findById(@Param('id') id) {
    try {
      return await this.service.findById(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Get('/')
  async findall() {
    try {
      return await this.service.findAll();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post('')
  @UseInterceptors(new ValidatorInterceptor(new UserContract))
  async create(@Body() user: User) {
    return await this.service.create(user);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    try {
      return await this.service.delete(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
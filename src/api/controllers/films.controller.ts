import { Controller, Get, Post, Param, Body, HttpStatus, Delete, UseInterceptors } from '@nestjs/common';
import { FilmsService } from '../services/films.service';
import { Films } from '../entities/films.entity'
import { ValidatorInterceptor } from '../interceptors/validate.interceptor'
import { FilmsContract  } from '../contracts/films.contract';

@Controller('v1/films')
export class FilmsController {
  constructor(private readonly service: FilmsService) { }

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
  @UseInterceptors(new ValidatorInterceptor(new FilmsContract))
  async create(@Body() body: Films) {
    return await this.service.create(body);
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
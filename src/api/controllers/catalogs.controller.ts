import { Controller, Get, Post, Param, Body, HttpStatus, Delete, UseInterceptors } from '@nestjs/common';
import { CatalogService } from '../services/catalogs.service';
import { Catalog } from '../entities/catalogs.entity';
import { ValidatorInterceptor } from '../interceptors/validate.interceptor'
import { CatalogContract  } from '../contracts/catalog.contract';

@Controller('v1/catalogs')
export class catalogsController {
  constructor(private readonly service: CatalogService) { }

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
  @UseInterceptors(new ValidatorInterceptor(new CatalogContract))
  async create(@Body() body: Catalog) {
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
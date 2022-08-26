import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Films } from './entities/films.entity';
import { FilmsService } from './services/films.service';
import { FilmsController } from './controllers/films.controller';
import { User } from './entities/user.entity';
import { UserService } from './services/users.service';
import { UserController } from './controllers/users.controller';
import { Catalog } from './entities/catalogs.entity';
import { catalogsController } from './controllers/catalogs.controller';
import { CatalogService } from './services/catalogs.service';

@Module({
    imports: [TypeOrmModule.forFeature([Films, User, Catalog])],
    providers: [FilmsService, UserService, CatalogService],
    controllers: [FilmsController, UserController, catalogsController],
})
export class ApiModule { }
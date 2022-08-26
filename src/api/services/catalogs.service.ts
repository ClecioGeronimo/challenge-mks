import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Catalog } from '../entities/catalogs.entity'
import { Films } from '../entities/films.entity'

@Injectable()
export class CatalogService {

    constructor(@InjectRepository(Catalog)
    private readonly repository: Repository<Catalog>
    ) { }

    async findById(id: number): Promise<Catalog> {
        return await this.repository.findOneBy({ id })
    }
    async findAll() {
        return await this.repository.find()
    }

    async create(catalogs: Catalog) {
        return await this.repository.save(catalogs)
    }
    async update(id: number, Catalogs: Catalog) {
        return await this.repository.update(id, Catalogs)
    }

    async delete(id: number) {
        return await this.repository.delete({ id })
    }

}
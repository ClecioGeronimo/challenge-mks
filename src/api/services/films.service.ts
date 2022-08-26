import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Films } from '../entities/films.entity'

@Injectable()
export class FilmsService {

    constructor(@InjectRepository(Films)
    private readonly repository: Repository<Films>
    ) { }

    async findById(id: number): Promise<Films> {
        return await this.repository.findOneBy({ id })
    }
    async findAll() {
        return await this.repository.find()
    }

    async create(films: Films) {
        return await this.repository.save(films)
    }
    async update(id: number, films: Films) {
        return await this.repository.update(id, films)
    }

    async delete(id: number) {
        return await this.repository.delete({ id })
    }

}
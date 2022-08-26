import { Contract } from './contract'
import { Injectable } from '@nestjs/common'
import { Jarvis } from '../utils/jarvis'
import { Films } from '../entities/films.entity'

@Injectable()
export class FilmsContract implements Contract {

  errors: any[]
  
  validate(model: Films): boolean {
    const jarvis = new Jarvis()

    jarvis.isRequired(model.name, 'É necessário um nome de filme.')
    jarvis.isRequired(model.description, 'Faça uma pequena descrição do filme.')
    jarvis.isRequired(model.classification, 'É Obrigatório uma Classificação.')
    this.errors = jarvis.errors

    return jarvis.isValid()
  }

}
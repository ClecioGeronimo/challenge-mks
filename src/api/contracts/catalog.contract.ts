import { Contract } from './contract'
import { Injectable } from '@nestjs/common'
import { Jarvis } from '../utils/jarvis'
import { Catalog } from '../entities/catalogs.entity'

@Injectable()
export class CatalogContract implements Contract {

  errors: any[]
  
  validate(model: Catalog): boolean {
    const jarvis = new Jarvis()

    jarvis.isRequired(model.name, 'É necessário um nome.')
    jarvis.isRequired(model.description, 'Esse campo é obrigatório.')
    jarvis.isRequired(model.classification, 'É Obrigatório uma Classificação.')
    this.errors = jarvis.errors

    return jarvis.isValid()
  }

}
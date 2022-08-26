import { Contract } from './contract'
import { Injectable } from '@nestjs/common'
import { Jarvis } from '../utils/jarvis'
import { User } from '../entities/user.entity'

@Injectable()
export class UserContract implements Contract {

  errors: any[]
  
  validate(model: User): boolean {
    const jarvis = new Jarvis()

    jarvis.isRequired(model.socialName, 'É necessário um nome.')
    jarvis.isRequired(model.email, 'O email é um campo obrigatório.')
    jarvis.isRequired(model.password, 'A Senha é obrigatória.')
    this.errors = jarvis.errors

    return jarvis.isValid()
  }

}
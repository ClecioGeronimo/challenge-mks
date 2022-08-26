import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string;

    @Column({name: 'full_name'})
    socialName: string;  

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    addressComplement: string;

    @Column({ nullable: true })
    addressCity: string;

    @Column({ nullable: true })
    addressUF: string;






}
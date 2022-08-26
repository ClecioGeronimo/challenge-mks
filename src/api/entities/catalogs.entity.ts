import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalogs')
export class Catalog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    classification: number;

    @Column({ nullable: true })
    releaseDate: Date;

    @Column({ nullable: true })
    synopsis: string;




}
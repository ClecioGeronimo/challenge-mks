import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('films')
export class Films {
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
    fantasyName: string;

    @Column({ nullable: true })
    synopsis: string;
}
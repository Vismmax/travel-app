import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Place} from "../places/place.entity";

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    capital: string;

    @Column()
    description: string;

    @Column()
    lang: string;

    @OneToMany(() => Place, place => place.country)
    places: Place[];
}
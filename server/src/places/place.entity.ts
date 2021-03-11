import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {Country} from "../countries/country.entity";
import {Rating} from "../ratings/rating.entity";

@Entity()
export class Place {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    lang: string;

    @ManyToOne(() => Country, country => country.places)
    country: Country;

    @OneToMany(() => Rating, rating => rating.place)
    ratings: Rating[];
}
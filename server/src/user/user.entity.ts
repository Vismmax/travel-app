import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Rating} from "../ratings/rating.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @Column()
    isAdmin: boolean;

    @OneToMany(() => Rating, rating => rating.user)
    ratings: Rating[];
}
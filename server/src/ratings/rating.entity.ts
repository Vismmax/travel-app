import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from "../user/user.entity";
import {Place} from "../places/place.entity";

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @ManyToOne(() => Place, place => place.ratings)
    place: Place;

    @ManyToOne(() => User, user => user.ratings)
    user: User;
}
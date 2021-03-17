import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Place } from '../places/place.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alpha3Code: string;

  @Column()
  name: string;

  @Column()
  capital: string;

  @Column()
  description: string;

  @Column()
  imgUrl: string;

  @Column()
  videoUrl: string;

  @Column()
  lang: string;

  @OneToMany(() => Place, (place) => place.country)
  places: Place[];
}

@Entity()
export class CountryInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  capital: string;

  @Column()
  alpha2Code: string;

  @Column()
  alpha3Code: string;

  @Column()
  timezones: string;

  @Column()
  latCapital: string;

  @Column()
  lonCapital: string;

  @Column()
  currenciesCode: string;

  @Column()
  currenciesName: string;

  @Column()
  currenciesSymbol: string;

  @Column()
  flag: string;

  // @OneToMany(() => Place, place => place.country)
  // places: Place[];
}

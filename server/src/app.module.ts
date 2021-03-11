import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { PlacesModule } from './places/places.module';
import { UserModule } from './user/user.module';
import { RatingsModule } from './ratings/ratings.module';
import { AuthModule } from './auth/auth.module';
import { ImgsModule } from './imgs/imgs.module';
import {Country} from "./countries/country.entity";
import {Place} from "./places/place.entity";
import {Rating} from "./ratings/rating.entity";
import {User} from "./user/user.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Country, Place, Rating, User],
      synchronize: true,
    }),
    CountriesModule,
    PlacesModule,
    UserModule,
    RatingsModule,
    AuthModule,
    ImgsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

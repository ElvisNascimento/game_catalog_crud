import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './games/games.controller';
import { GamesModule } from './games/games.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesService } from './games/games.service';

@Module({
  imports: [GamesModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port:5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
  }),
],
  controllers: [AppController, GamesController],
  providers: [AppService,GamesService],
})
export class AppModule {}

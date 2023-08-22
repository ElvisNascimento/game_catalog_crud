import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [GamesModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port:5432,
    username: 'postgres',
    password: 'docker',
    database: 'game_catalog',
    autoLoadEntities: true,
    synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

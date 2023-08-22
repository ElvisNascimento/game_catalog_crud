import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Console } from './entities/console.entity';
import { Desenvolvedor } from './entities/desenvolvedor.entity';
import { GamesController } from './games.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Desenvolvedor, Console])],
  providers: [GamesService],
  controllers: [GamesController],
})
export class GamesModule { }

import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Console } from './entities/console.entity';
import { Desenvolvedor } from './entities/desenvolvedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Console, Desenvolvedor])],
  providers: [GamesService],
})
export class GamesModule {}

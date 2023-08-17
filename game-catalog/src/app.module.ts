import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './games/games.controller';
import { GamesModule } from './games/games.module';

@Module({
  imports: [GamesModule],
  controllers: [AppController, GamesController],
  providers: [AppService],
})
export class AppModule {}

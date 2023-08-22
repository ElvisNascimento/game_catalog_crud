import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    GamesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'game_catalog',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}

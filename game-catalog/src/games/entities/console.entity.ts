import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Game } from './game.entity';

@Entity('console')
export class Console {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinTable({ name: 'games_console_console' })
  @ManyToMany(() => Game, (game: Game) => game.console)
  games: Game[];

  @Column()
  datalancamento: Date;

  @Column({ nullable: true })
  empresa: string;
}

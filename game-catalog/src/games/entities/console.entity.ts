import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity('console')
export class Console {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToMany(() => Game, (game) => game.console)
  codigo: string;

  @Column()
  datalancamento: Date;

  @Column()
  empresa: string;
}

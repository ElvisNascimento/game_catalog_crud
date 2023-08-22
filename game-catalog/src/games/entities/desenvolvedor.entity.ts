import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity('desenvolvedor')
export class Desenvolvedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Game, (game) => game.desenvolvedor)
  games: Game[];

  @Column({ nullable: true })
  dataFundacao: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  sede: string;
}

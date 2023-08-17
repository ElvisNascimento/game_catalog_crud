import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Console } from './console.entity';
import { Desenvolvedor } from './desenvolvedor.entity';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  dataLancamento: Date;

  @Column()
  website: string;

  @JoinTable()
  @ManyToOne(() => Desenvolvedor, (desenvolvedor) => desenvolvedor.games)
  desenvolvedor: Desenvolvedor;

  @Column()
  genero: string;

  @Column()
  urlCapa: string;

  @JoinTable()
  @ManyToMany(() => Console, (console) => console.codigo, {
    cascade: true,
  })
  console: Console[];
}

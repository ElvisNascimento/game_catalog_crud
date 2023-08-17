import { Console } from './console.entity';
import { Desenvolvedor } from './desenvolvedor.entity';
export declare class Game {
    id: number;
    nome: string;
    descricao: string;
    dataLancamento: Date;
    website: string;
    desenvolvedor: Desenvolvedor;
    genero: string;
    urlCapa: string;
    console: Console[];
}

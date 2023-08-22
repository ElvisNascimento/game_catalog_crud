import { CreateConsoleDto } from './create-console.dto';
export declare class CreateGamesDto {
    id: number;
    nome: string;
    descricao: string;
    dataLancamento: Date;
    website: string;
    desenvolvedor: string;
    genero: string;
    urlCapa: string;
    consoles: CreateConsoleDto[];
}

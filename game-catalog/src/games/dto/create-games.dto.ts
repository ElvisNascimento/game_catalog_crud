export class CreateGamesDto {
  id: number;
  nome: string;
  descricao: string;
  dataLancamento: Date;
  website: string;
  desenvolvedor: string;
  genero: string;
  urlCapa: string;
  console: string[];
}

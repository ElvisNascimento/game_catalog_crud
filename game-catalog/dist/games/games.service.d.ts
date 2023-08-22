import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { Desenvolvedor } from './entities/desenvolvedor.entity';
import { Console } from './entities/console.entity';
export declare class GamesService {
    private readonly gameRepository;
    private readonly desenvolvedorRepository;
    private readonly consoleRepository;
    constructor(gameRepository: Repository<Game>, desenvolvedorRepository: Repository<Desenvolvedor>, consoleRepository: Repository<Console>);
    findAll(): Promise<Game[]>;
    findOne(id: string): Promise<Game>;
    create(createGamesDto: Game): Promise<Game>;
    remove(id: string): string;
    private preloadDesenvolvedorByName;
}

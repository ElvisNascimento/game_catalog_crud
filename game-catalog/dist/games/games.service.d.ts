import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { Desenvolvedor } from './entities/desenvolvedor.entity';
import { Console } from './entities/console.entity';
import { CreateGamesDto } from './dto/create-games.dto';
import { UpdateGamesDto } from './dto/update-games.dto';
export declare class GamesService {
    private readonly gameRepository;
    private readonly desenvolvedorRepository;
    private readonly consoleRepository;
    constructor(gameRepository: Repository<Game>, desenvolvedorRepository: Repository<Desenvolvedor>, consoleRepository: Repository<Console>);
    findAll(): Promise<Game[]>;
    findOne(id: string): Promise<Game>;
    create(createGamesDto: CreateGamesDto): Promise<Game>;
    update(id: string, updateGamesDto: UpdateGamesDto): Promise<Game>;
    remove(id: string): string;
    private preloadConsoleByCodigo;
    private preloadDesenvolvedorByName;
}

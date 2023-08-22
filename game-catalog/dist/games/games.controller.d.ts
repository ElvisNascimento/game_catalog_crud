import { GamesService } from './games.service';
import { Game } from './entities/game.entity';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    findAll(): Promise<Game[]>;
    findOne(id: string): Promise<Game>;
    create(createGamesDto: Game): Promise<Game>;
    remove(id: string): string;
}

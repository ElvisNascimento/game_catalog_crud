import { GamesService } from './games.service';
import { CreateGamesDto } from './dto/create-games.dto';
import { UpdateGamesDto } from './dto/update-games.dto';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    findAll(): Promise<import("./entities/game.entity").Game[]>;
    findOne(id: string): Promise<import("./entities/game.entity").Game>;
    create(createGamesDto: CreateGamesDto): Promise<import("./entities/game.entity").Game>;
    update(id: string, updateGamesDto: UpdateGamesDto): Promise<import("./entities/game.entity").Game>;
    remove(id: string): string;
}

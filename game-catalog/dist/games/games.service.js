"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const game_entity_1 = require("./entities/game.entity");
const desenvolvedor_entity_1 = require("./entities/desenvolvedor.entity");
const console_entity_1 = require("./entities/console.entity");
let GamesService = exports.GamesService = class GamesService {
    constructor(gameRepository, desenvolvedorRepository, consoleRepository) {
        this.gameRepository = gameRepository;
        this.desenvolvedorRepository = desenvolvedorRepository;
        this.consoleRepository = consoleRepository;
    }
    findAll() {
        return this.gameRepository.find({
            relations: ['console', 'desenvolvedor'],
        });
    }
    findOne(id) {
        const game = this.gameRepository.findOne({
            where: { id: Number(id) },
            relations: { console: true, desenvolvedor: true },
        });
        if (!game) {
            throw new common_1.NotFoundException(`Game ID ${id} not found`);
        }
        return game;
    }
    async create(createGamesDto) {
        createGamesDto.consoles.forEach(c => c.datalancamento = new Date());
        console.log(createGamesDto);
        const consoles = await Promise.all(createGamesDto.consoles.map(async (console) => await this.preloadConsoleByCodigo(console.codigo)));
        const desenvolvedor = await this.preloadDesenvolvedorByName(createGamesDto.desenvolvedor);
        const game = this.gameRepository.create({
            ...createGamesDto,
            console: createGamesDto.consoles,
            desenvolvedor,
        });
        console.log(game);
        return this.gameRepository.save(game);
    }
    async update(id, updateGamesDto) {
        const console = updateGamesDto.consoles &&
            (await Promise.all(updateGamesDto.consoles.map((console) => this.preloadConsoleByCodigo(console.codigo))));
        const desenvolvedor = updateGamesDto.desenvolvedor
            ? await this.preloadDesenvolvedorByName(updateGamesDto.desenvolvedor)
            : undefined;
        const game = await this.gameRepository.preload({
            id: +id,
            ...updateGamesDto,
            console,
            desenvolvedor,
        });
        if (!game) {
            throw new common_1.NotFoundException(`Game ID ${id} not found`);
        }
        return this.gameRepository.save(game);
    }
    remove(id) {
        return `removido ${id}`;
    }
    async preloadConsoleByCodigo(codigo) {
        const console = await this.consoleRepository.findOne({ where: { codigo } });
        if (console) {
            return console;
        }
        return this.consoleRepository.create({ codigo });
    }
    async preloadDesenvolvedorByName(nome) {
        const desenvolvedor = await this.desenvolvedorRepository.findOne({
            where: { nome },
        });
        if (desenvolvedor) {
            return desenvolvedor;
        }
        return this.desenvolvedorRepository.create({
            nome: nome,
        });
    }
};
exports.GamesService = GamesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(game_entity_1.Game)),
    __param(1, (0, typeorm_1.InjectRepository)(desenvolvedor_entity_1.Desenvolvedor)),
    __param(2, (0, typeorm_1.InjectRepository)(console_entity_1.Console)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], GamesService);
//# sourceMappingURL=games.service.js.map
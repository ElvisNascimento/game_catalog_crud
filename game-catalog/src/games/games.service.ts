import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { Desenvolvedor } from './entities/desenvolvedor.entity';
import { Console } from './entities/console.entity';
import { CreateGamesDto } from './dto/create-games.dto';
import { UpdateGamesDto } from './dto/update-games.dto';
import { CreateConsoleDto } from './dto/create-console.dto';
import { UpdateConsolesDto } from './dto/update-consoles.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    @InjectRepository(Desenvolvedor)
    private readonly desenvolvedorRepository: Repository<Desenvolvedor>,
    @InjectRepository(Console)
    private readonly consoleRepository: Repository<Console>,
  ) {}

  findAll() {
    return this.gameRepository.find({
      relations: ['console', 'desenvolvedor'],
    });
  }

  findOne(id: string) {
    const game = this.gameRepository.findOne({
      where: { id: Number(id) },
      relations: { console: true, desenvolvedor: true },
    });

    if (!game) {
      throw new NotFoundException(`Game ID ${id} not found`);
    }
    return game;
  }

  public async create(createGamesDto: CreateGamesDto) {
    createGamesDto.consoles.forEach(c => c.datalancamento = new Date())
    console.log(createGamesDto);
    const consoles = await Promise.all(
      createGamesDto.consoles.map(async (console: CreateConsoleDto)  =>
        await this.preloadConsoleByCodigo(console.codigo),
      ),
    );

    const desenvolvedor = await this.preloadDesenvolvedorByName(
      createGamesDto.desenvolvedor,
    );

    const game = this.gameRepository.create({
      ...createGamesDto,
      console: createGamesDto.consoles,
      desenvolvedor,
    });
    console.log(game);
    
    return this.gameRepository.save(game);
  }

  async update(id: string, updateGamesDto: UpdateGamesDto) {
    const console =
      updateGamesDto.consoles &&
      (await Promise.all(
        updateGamesDto.consoles.map((console: UpdateConsolesDto) =>
          this.preloadConsoleByCodigo(console.codigo),
        ),
      ));

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
      throw new NotFoundException(`Game ID ${id} not found`);
    }
    return this.gameRepository.save(game);
  }

  remove(id: string) {
    return `removido ${id}`;
  }

  private async preloadConsoleByCodigo(codigo: string): Promise<Console> {
    const console = await this.consoleRepository.findOne({ where: { codigo } });

    if (console) {
      return console;
    }
    return this.consoleRepository.create({ codigo });
  }

  private async preloadDesenvolvedorByName(
    nome: string,
  ): Promise<Desenvolvedor> {
    const desenvolvedor = await this.desenvolvedorRepository.findOne({
      where: { nome } as any, // Adicione o 'as any' para ajudar na inferência de tipos
    });

    if (desenvolvedor) {
      return desenvolvedor;
    }
    return this.desenvolvedorRepository.create({
      nome: nome,
    });
  }
}
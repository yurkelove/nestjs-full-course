import { Injectable, NotFoundException } from '@nestjs/common';
import { MovieTestService } from '../movie-test/movie-test.service';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { In, Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';
import { ActorEntity } from '../actor/entities/actor.entity';

@Injectable()
export class MovieService {
  //Внедрили репозиторий через наш конструктор
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
  ) {}

  //get data
  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      where: {
        isPublic: true,
      },
      order: {
        createdAt: 'desc',
      },
      // //Сколько взять
      // take: 1,
      // // Что нужно взять
      // select: {
      //   id: true,
      //   title: true,
      // },
    });
  }

  async findById(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: {
        id,
      },
      relations: {
        actors: true,
      },
    });

    if (!movie) throw new NotFoundException('Not found movie');

    return movie;
  }

  //created
  async create(dto: MovieDto): Promise<MovieEntity> {
    const { title, releaseYear, actorsIds } = dto;

    const actors = await this.actorRepository.find({
      where: {
        id: In(actorsIds),
      },
    });

    if (!actors || !actors.length)
      throw new NotFoundException('Not found one by one');

    const movie = this.movieRepository.create({
      title,
      releaseYear,
      actors,
    });

    return await this.movieRepository.save(movie);
  }

  async update(id: string, dto: MovieDto): Promise<boolean> {
    const movie = await this.findById(id);

    Object.assign(movie, dto);

    await this.movieRepository.save(movie);

    return true;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    await this.movieRepository.remove(movie);

    return movie.id;
  }

  // async test() {
  //   return this.MovieTestService.test();
  // }
}

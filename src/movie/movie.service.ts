import { Injectable, NotFoundException } from '@nestjs/common';
import { MovieDto } from './dto/movie.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Movie, Poster } from '../generated/prisma/client';
@Injectable()
export class MovieService {
  //Внедрили репозиторий через наш конструктор
  constructor(private readonly PrismaService: PrismaService) {}

  //get data
  async findAll() {
    return await this.PrismaService.movie.findMany({
      where: {
        isAvailable: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        actors: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findById(id: string): Promise<Movie> {
    const movie = await this.PrismaService.movie.findUnique({
      where: {
        id,
      },
      include: {
        actors: true,
        poster: true,
        reviews: true,
      },
    });

    if (!movie || !movie.isAvailable)
      throw new NotFoundException('Not found movie');

    return movie;
  }

  //created
  async create(dto: MovieDto): Promise<Movie> {
    const { title, releaseYear, imageUrl, actorsIds } = dto;

    const actors = await this.PrismaService.actor.findMany({
      where: {
        id: { in: actorsIds },
      },
    });

    if (!actors || !actors.length)
      throw new NotFoundException('Not found one by one');

    const movie = await this.PrismaService.movie.create({
      data: {
        title,
        releaseYear,
        poster: imageUrl
          ? {
              create: {
                url: imageUrl,
              },
            }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });

    return movie;
  }

  async update(id: string, dto: MovieDto): Promise<boolean> {
    const movie = await this.findById(id);

    const actors = await this.PrismaService.actor.findMany({
      where: {
        id: { in: dto.actorsIds },
      },
    });

    if (!actors || !actors.length)
      throw new NotFoundException('Not found one by one');

    await this.PrismaService.movie.update({
      where: {
        id: movie.id,
      },
      data: {
        title: dto.title,
        releaseYear: dto.releaseYear,
        poster: dto.imageUrl
          ? {
              create: {
                url: dto.imageUrl,
              },
            }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });

    return true;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    await this.PrismaService.movie.delete({
      where: {
        id,
      },
    });

    return movie.id;
  }
}

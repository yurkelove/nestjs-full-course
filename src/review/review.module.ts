import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { ReviewEntity } from './entity/review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from '../movie/movie.module';
import { MovieService } from '../movie/movie.service';
import { MovieEntity } from '../movie/entities/movie.entity';
import { ActorEntity } from '../actor/entities/actor.entity';
import { PosterEntity } from '../movie/entities/poster.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReviewEntity,
      MovieEntity,
      ActorEntity,
      PosterEntity,
    ]),
    MovieModule,
  ],
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
})
export class ReviewModule {}

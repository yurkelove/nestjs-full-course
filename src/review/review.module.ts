import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { MovieModule } from '../movie/movie.module';
import { MovieService } from '../movie/movie.service';

@Module({
  imports: [MovieModule],
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
})
export class ReviewModule {}

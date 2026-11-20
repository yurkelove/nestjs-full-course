import { Body, Controller, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { MovieDto } from '../movie/dto/movie.dto';
import { CreateReviewDTO } from './dto/create-review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() dto: CreateReviewDTO) {
    return this.reviewService.create(dto);
  }
}

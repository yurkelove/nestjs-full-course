import { Injectable } from '@nestjs/common';
import { MovieTestService } from '../movie-test/movie-test.service';

@Injectable()
export class MovieService {
  constructor(private readonly MovieTestService: MovieTestService) {}

  async test() {
    return this.MovieTestService.test();
  }
}

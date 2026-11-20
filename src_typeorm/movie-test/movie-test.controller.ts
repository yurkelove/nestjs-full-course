import { Controller } from '@nestjs/common';
import { MovieTestService } from './movie-test.service';

@Controller('movie-test')
export class MovieTestController {
  constructor(private readonly movieTestService: MovieTestService) {}
}

import { Module } from '@nestjs/common';
import { MovieTestService } from './movie-test.service';
import { MovieTestController } from './movie-test.controller';

// @Global() for use in all sides project
@Module({
  controllers: [MovieTestController],
  providers: [MovieTestService],
  exports: [MovieTestService],
})
export class MovieTestModule {}

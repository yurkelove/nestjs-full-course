import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MovieTestModule } from '../movie-test/movie-test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity]), MovieTestModule],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService], // For all module  re-use analog angular
  // imports: [MovieTestModule], // Import module - analog @Global
})
export class MovieModule {}

import { Module } from '@nestjs/common';
import { MovieSwaggerService } from './movie-swagger.service';
import { MovieSwaggerController } from './movie-swagger.controller';

@Module({
  controllers: [MovieSwaggerController],
  providers: [MovieSwaggerService],
})
export class MovieSwaggerModule {}

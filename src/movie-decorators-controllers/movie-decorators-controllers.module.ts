import { Module } from '@nestjs/common';
import { MovieDecoratorsControllersService } from './movie-decorators-controllers.service';
import { MovieDecoratorsControllersController } from './movie-decorators-controllers.controller';

@Module({
  controllers: [MovieDecoratorsControllersController],
  providers: [MovieDecoratorsControllersService],
})
export class MovieDecoratorsControllersModule {}

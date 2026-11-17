import {
  Body,
  Post,
  Controller,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  findByIdAll(@Param('id') id: string) {
    return this.movieService.findById(+id);
  }

  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.update(+id, dto);
  }
  // @Get('test')
  // async test() {
  //   return this.movieService.test();
  // }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(+id);
  }
}

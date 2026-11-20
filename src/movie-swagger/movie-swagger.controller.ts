import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { MovieSwaggerService } from './movie-swagger.service';
import {
  ApiBody,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { timestamp } from 'rxjs';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieResponse } from './dto/movie.dto';

@ApiTags('Movie-Swagger-Api')
@Controller('movie-swagger')
export class MovieSwaggerController {
  constructor(private readonly movieSwaggerService: MovieSwaggerService) {}

  //Information
  @ApiOperation({
    summary: 'Get film list',
    description: 'Return films list',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Films find' })
  @Get()
  findAllSwaggersMovie() {
    return [
      { id: 1, title: 'Fight' },
      { id: 2, title: 'Fight 2' },
    ];
  }

  //Information
  @ApiOperation({
    summary: 'Get film by id',
    description: 'Return information about film',
  })
  @ApiParam({ name: 'id', type: 'string', description: 'ID film' })
  @ApiHeader({ name: 'X-Auth-Token', description: 'Token autorization' })
  @ApiQuery({ name: 'year', type: 'number', description: 'Filter by year' })
  //@ApiOkResponse({description: 'Film find'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Film find',
    type: MovieResponse,
  })
  //@ApiNotFoundResponse({description: 'Film find'})
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Film not found' })
  @ApiNotFoundResponse({
    description: 'Film not found',
    example: {
      status: 404,
      message: 'Movie not found',
      timestamp: '2025-02-18',
      path: '/movie/123',
    },
  })
  @Get(':id')
  //Сокращенная запись тому что сверху
  findAllSwaggersMovieById(
    @Param('id') id: string,
    @Query('year') year: number,
  ) {
    return [
      { id: 1, title: 'Fight' },
      { id: 2, title: 'Fight 2' },
    ];
  }

  @ApiOperation({ summary: 'Create Film' })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       title: { type: 'string', example: 'Fight club' },
  //     },
  //   },
  // })
  //Сокращенная запись тому что сверху @Body
  @Post()
  create(@Body() dto: CreateMovieDto) {
    return dto;
  }
}

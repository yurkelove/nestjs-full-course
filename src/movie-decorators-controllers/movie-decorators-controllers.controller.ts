import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Headers,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import type { Request as ExpressRequest, Response } from 'express';

@Controller('movies-controller')
export class MovieDecoratorsControllersController {
  @Get()
  // findAll(@Query('genre') genre: string) {
  //   return genre
  //     ? `Films ${genre}`
  //     : [{ title: 'Fight' }, { title: 'No Fight' }];
  // }
  findAll(@Query() query: any) {
    return `Films with parametrs : ${JSON.stringify(query)}`;
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return { id };
  }

  //Decorator body
  @Post()
  // create(@Body('title') title: string) {
  //   return `Film was added ${title}`;
  // }
  create(@Body() body: { title: string; genre: string }) {
    return body;
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return headers;
  }

  @Get('user-agent')
  getUseAgent(@Headers('user-agent') userAgent: string) {
    return { userAgent };
  }

  // All request
  @Get('request')
  getRequestDetails(@Req() req: ExpressRequest) {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      query: req.query,
      params: req.params,
      body: req.body,
      ip: req.ip,
    };
  }

  @Get('response')
  getResponseDetails(@Res() res: Response) {
    res.status(201).json({ message: 'Hello' });
  }
}

//Methods decorators

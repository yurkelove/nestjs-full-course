import { Injectable, type NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

@Injectable()
// через main.ts - надо переделать на функцию, и так же через app.module AppControle(path) и тд
// 3 разных варианта подключения
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request... ${req.method} ${req.url}`);
    next(); // Дальше моршрут передается
  }
}

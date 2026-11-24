import {
  type MiddlewareConsumer,
  Module,
  type NestModule,
} from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { ConfigModule } from '@nestjs/config';
import { ReviewModule } from './review/review.module';
import { ActorModule } from './actor/actor.module';
import { PrismaModule } from './prisma/prisma.module';
import { LoggingMiddleware } from './common/middlewares/logger.middleware';
import { MovieSwaggerModule } from './movie-swagger/movie-swagger.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'nestjs',
    }),
    PrismaModule,
    MovieModule,
    ReviewModule,
    ActorModule,
    MovieSwaggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // forRoutes для каких путей что б работал
    // exclude для каких путей что б не работал
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}

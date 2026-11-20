import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { ConfigModule } from '@nestjs/config';
import { ReviewModule } from './review/review.module';
import { ActorModule } from './actor/actor.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'nestjs',
    }),
    MovieModule,
    ReviewModule,
    ActorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

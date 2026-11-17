import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MovieModule } from './movie/movie.module';
import { MovieTestModule } from './movie-test/movie-test.module';
import { MovieDecoratorsControllersModule } from './movie-decorators-controllers/movie-decorators-controllers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmCOnfig } from './config/typeorm.config';

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
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // ready to use
      useFactory: getTypeOrmCOnfig,
      inject: [ConfigService], // add configservice inside useFactory
    }),
    // MovieDecoratorsControllersModule,
    MovieModule,
    // MovieTestModule,
    // TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

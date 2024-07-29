import { Module } from '@nestjs/common';
import { AppController as v1Controller } from './v1/app.controller';

@Module({
  controllers: [v1Controller],
})
export class AppModule {}

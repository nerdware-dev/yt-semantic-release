import { Module } from '@nestjs/common';
import { AppController as v1Controller } from './v1/app.controller';
import { AppController as v2Controller } from './v2/app.controller';

@Module({
  controllers: [v1Controller, v2Controller],
})
export class AppModule {}

import { Controller, Get } from '@nestjs/common';

@Controller('v2')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello new World!';
  }
}

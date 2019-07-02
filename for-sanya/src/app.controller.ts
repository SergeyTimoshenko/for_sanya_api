import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index() {
    return this.appService.index();
  }
  @Post()
  save(
    @Body() body
  ) {
    return this.appService.create(body)
  }
}

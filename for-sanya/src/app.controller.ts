import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(): any {
    return this.appService.index();
  }
  @Post()
  save(
    @Body() body
  ) {
    return this.appService.create(body)
  }

  @Post('/:id')
  update(
    @Body() body,
    @Param() {id}
  ): any {
    return this.appService.update(id, body)
  }
}

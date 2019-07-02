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

  @Post('login')
  login(
    @Body() body
  ) {
    if (!body.email) return 'Email property unset'
    if (!body.password) return 'Passord property unset'
    return this.appService.login(body)
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hello World!!!';
  }

  @Post()
  addNumbers(@Body('num1') num1: number, @Body('num2') num2: number): number {
    return num1 + num2;
  }
}

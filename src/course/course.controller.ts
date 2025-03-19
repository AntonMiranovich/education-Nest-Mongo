import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { BodyDtoCourse } from './course.dto';

@Controller('/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) { }

  @Post()
  async create(@Body() obj: BodyDtoCourse) {
    return await this.courseService.create(obj);
  }

  @Get()
  async getAll() {
    return await this.courseService.getAllItem();
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return await this.courseService.getById(id);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() obj: BodyDtoCourse) {
    return await this.courseService.putById(id, obj);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.courseService.deleteById(id);
  }
}

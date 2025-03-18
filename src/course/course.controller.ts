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

@Controller('/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async create(@Body() obj) {
    return await this.courseService.create(obj);
  }

  @Get()
  async getAll() {
    return await this.courseService.getAllItem();
  }

  @Get('/:id')
  async getById(@Param('id') id) {
    return await this.courseService.getById(id);
  }

  @Put('/:id')
  async update(@Param('id') id, @Body() obj) {
    return await this.courseService.putById(id, obj);
  }

  @Delete('/:id')
  async delete(@Param('id') id) {
    return await this.courseService.deleteById(id);
  }
}

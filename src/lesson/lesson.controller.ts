import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LessonService } from './lesson.service';

@Controller('/lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  async create(@Body() obj) {
    return await this.lessonService.create(obj);
  }

  @Get()
  async getAll() {
    return await this.lessonService.getAllItem();
  }

  @Get('/:id')
  async getById(@Param('id') id) {
    return await this.lessonService.getById(id);
  }

  @Put('/:id')
  async update(@Param('id') id, @Body() obj) {
    return await this.lessonService.putById(id, obj);
  }

  @Delete('/:id')
  async delete(@Param('id') id) {
    return await this.lessonService.deleteById(id);
  }
}

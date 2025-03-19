import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { BodyDto } from './user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() obj: BodyDto) {
    return await this.userService.create(obj);
  }

  @Get()
  async getAll() {
    return await this.userService.getAllItem();
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return await this.userService.getById(id);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() obj: BodyDto) {
    return await this.userService.putById(id, obj);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.userService.deleteById(id);
  }
}

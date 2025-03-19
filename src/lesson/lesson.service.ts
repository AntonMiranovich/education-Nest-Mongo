import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from 'src/schemas/lesson.schema';
import { BodyDtoLesson } from './lesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel('lesson') private readonly lessonModel: Model<Lesson>,
  ) { }
  create(obj: BodyDtoLesson) {
    return this.lessonModel.create(obj);
  }
  getAllItem() {
    return this.lessonModel.find();
  }

  getById(id: number) {
    return this.lessonModel.findById(id);
  }

  deleteById(id: number) {
    return this.lessonModel.findByIdAndDelete(id);
  }

  putById(id: number, obj: BodyDtoLesson) {
    return this.lessonModel.findByIdAndUpdate(id, obj);
  }
}

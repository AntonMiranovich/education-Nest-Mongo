import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from 'src/schemas/lesson.schema';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel('lesson') private readonly lessonModel: Model<Lesson>,
  ) {}
  create(obj) {
    return this.lessonModel.create(obj);
  }
  getAllItem() {
    return this.lessonModel.find();
  }

  getById(id) {
    return this.lessonModel.findById(id);
  }

  deleteById(id) {
    return this.lessonModel.findByIdAndDelete(id);
  }

  putById(id, obj) {
    return this.lessonModel.findByIdAndUpdate(id, obj);
  }
}

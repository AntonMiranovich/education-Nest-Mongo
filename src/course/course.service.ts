import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from 'src/schemas/course.schema';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel('course') private readonly courseModel: Model<Course>,
  ) {}
  create(obj) {
    return this.courseModel.create(obj);
  }
  getAllItem() {
    return this.courseModel.find();
  }

  getById(id) {
    return this.courseModel.findById(id);
  }

  deleteById(id) {
    return this.courseModel.findByIdAndDelete(id);
  }

  putById(id, obj) {
    return this.courseModel.findByIdAndUpdate(id, obj);
  }
}

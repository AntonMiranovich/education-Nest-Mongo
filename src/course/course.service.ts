import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from 'src/schemas/course.schema';
import { BodyDtoCourse } from './course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel('course') private readonly courseModel: Model<Course>,
  ) { }
  create(obj: BodyDtoCourse) {
    return this.courseModel.create(obj);
  }
  getAllItem() {
    return this.courseModel.find();
  }

  getById(id: number) {
    return this.courseModel.findById(id);
  }

  deleteById(id: number) {
    return this.courseModel.findByIdAndDelete(id);
  }

  putById(id: number, obj: BodyDtoCourse) {
    return this.courseModel.findByIdAndUpdate(id, obj);
  }
}

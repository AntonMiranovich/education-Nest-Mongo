import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.shema';
import { BodyDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private readonly userModel: Model<User>) { }
  create(obj: BodyDto) {
    return this.userModel.create(obj);
  }
  getAllItem() {
    return this.userModel.find();
  }

  getById(id: number) {
    return this.userModel.findById(id);
  }

  deleteById(id: number) {
    return this.userModel.findByIdAndDelete(id);
  }

  putById(id: number, obj: BodyDto) {
    return this.userModel.findByIdAndUpdate(id, obj);
  }
}

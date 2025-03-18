import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.shema';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private readonly userModel: Model<User>) {}
  create(obj) {
    return this.userModel.create(obj);
  }
  getAllItem() {
    return this.userModel.find();
  }

  getById(id) {
    return this.userModel.findById(id);
  }

  deleteById(id) {
    return this.userModel.findByIdAndDelete(id);
  }

  putById(id, obj) {
    return this.userModel.findByIdAndUpdate(id, obj);
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    CourseModule,
    LessonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/education-platform'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

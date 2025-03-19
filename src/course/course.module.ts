import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from 'src/schemas/course.schema';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { ValidationCourse } from 'src/middlewares';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'course', schema: CourseSchema }]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {
  configure(objMiddleware: MiddlewareConsumer) {
    objMiddleware
      .apply(ValidationCourse)
      .forRoutes({ path: '/course', method: RequestMethod.POST });
  }
}

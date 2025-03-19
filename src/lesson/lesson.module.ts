import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonSchema } from 'src/schemas/lesson.schema';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { ValidationLesson } from 'src/middlewares';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'lesson', schema: LessonSchema }]),
  ],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {
  configure(objMiddleware: MiddlewareConsumer) {
    objMiddleware
      .apply(ValidationLesson)
      .forRoutes({ path: '/lesson', method: RequestMethod.POST });
  }
}

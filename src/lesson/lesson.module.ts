import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonSchema } from 'src/schemas/lesson.schema';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'lesson', schema: LessonSchema }]),
  ],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Course {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  level: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);

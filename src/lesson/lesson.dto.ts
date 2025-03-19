import { IsString } from 'class-validator';

export class BodyDtoLesson {

    @IsString()
    title: string;
    description: string;
    level: string;
}


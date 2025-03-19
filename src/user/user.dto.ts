import { IsInt, IsString, Max, Min, MinLength } from 'class-validator';

export class BodyDto {

  @IsString()
  name: string;
  password: string;

  @IsString()
  @MinLength(8)
  email: string;

  @IsInt()
  @Min(18)
  @Max(100)
  age: number;
}


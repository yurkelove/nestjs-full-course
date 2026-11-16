import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
  IsNumber,
  IsPositive,
  IsInt,
  IsArray,
  IsEnum,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  // @MinLength(2)
  // @MaxLength(10)
  @Length(2, 40)
  title: string;

  @IsString({ message: 'Must be string' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'Must be ceil number' })
  @IsNumber({}, { message: 'Must be number' })
  @IsPositive({ message: 'Must be positive' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Tags must be array' })
  // @IsString({ message: 'Tags must be string', each: true })
  @IsEnum(TaskTag, { each: true, message: 'Tags must be indentichnuy' })
  @IsOptional()
  tags: TaskTag[];
}

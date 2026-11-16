import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

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
}

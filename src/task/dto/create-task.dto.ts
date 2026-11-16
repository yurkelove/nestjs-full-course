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

  @IsInt({ message: 'Must be ceil number' })
  @IsNumber({}, { message: 'Must be number' })
  @IsPositive({ message: 'Must be positive' })
  @IsOptional()
  priority: number;
}

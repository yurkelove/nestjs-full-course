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
  Matches,
  IsUrl,
  IsUUID,
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

  @IsString({ message: 'Password must be string' })
  @MinLength(6, { message: 'must be 6 symbols' })
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
    message: 'must be 1 big Letter, must be 6 min symbols',
  })
  password: string;

  // protocols ['https,http']; require_protocol: false, require_port: true, require_valid_protocol: false
  //hosst_whitelist ['google.com', 'ua-football.com'] host_blacklist
  @IsUrl({ protocols: ['http'] }, { message: 'Error format url' })
  url: string;

  @IsUUID('4', { message: 'Validation is error' })
  userId: string;
}

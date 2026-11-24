import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginRequest {
  @ApiProperty({
    description: 'Example email',
    example: 'yurkelove@gmail.com',
  })
  @IsString({ message: 'Email must be string' })
  @IsNotEmpty({ message: 'Email was required' })
  @IsEmail({}, { message: 'Uncorrect email' })
  email: string;

  @ApiProperty({
    description: 'Password',
    example: '123456',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Password must be string' })
  @IsNotEmpty({ message: 'Password was required' })
  @MinLength(6, { message: 'Password must be under 6 symbols' })
  @MaxLength(128, { message: 'Password must be less 128 symbols' })
  password: string;
}

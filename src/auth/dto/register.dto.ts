import {
  IsEAN,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterRequst {
  @IsString({ message: 'Name must be string' })
  @IsNotEmpty({ message: 'Name was required' })
  @MaxLength(50, { message: 'Name must be less 50 symbols' })
  name: string;
  @IsString({ message: 'Email must be string' })
  @IsNotEmpty({ message: 'Email was required' })
  @IsEmail({}, { message: 'Uncorrect email' })
  email: string;
  @IsString({ message: 'Password must be string' })
  @IsNotEmpty({ message: 'Password was required' })
  @MinLength(6, { message: 'Password must be under 6 symbols' })
  @MaxLength(128, { message: 'Password must be less 128 symbols' })
  password: string;
}

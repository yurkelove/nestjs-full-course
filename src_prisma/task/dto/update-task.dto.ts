import { IsNotEmpty, IsString, Length, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Name is string' })
  @IsNotEmpty({ message: 'Name is not empty' })
  @Length(2, 40, { message: 'Name has been 2 and 40 symbols' })
  title: string;

  @IsBoolean({ message: 'Status has been boolean' })
  isCompleted: boolean;
}

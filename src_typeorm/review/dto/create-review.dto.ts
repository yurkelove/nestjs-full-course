import { IsString, IsUUID, Min, Max, IsNumber } from 'class-validator';

export class CreateReviewDTO {
  @IsString()
  text: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  rating: number;

  @IsUUID('4')
  movieId: string;
}

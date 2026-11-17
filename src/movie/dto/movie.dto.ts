// DTO (Data Transfer Object) — это класс, который описывает, какие данные приходят в запросе.

import {
  IsNotEmpty,
  IsString,
  IsInt,
  Min,
  Max,
  IsOptional,
  IsBoolean,
} from 'class-validator';

//  Обычно это тело (body) POST- или PUT-запроса.
export class MovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear())
  releaseYear: number;
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}

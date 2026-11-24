import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    description: 'Name film',
    example: 'Fight Club',
  })
  title: string;
  @ApiProperty({
    description: 'Film year',
    example: 1999,
    type: Number,
  })
  releaseYear: number;
  @ApiPropertyOptional({
    description: 'Link to poster film',
    example: 'https://storage.example/video.com',
  })
  poster?: string;
  @ApiProperty({
    description: 'Id actors',
    example: ['123456', '6789'],
  })
  actorIds: string[];
}

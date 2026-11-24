import { ApiProperty } from '@nestjs/swagger';

export class MovieResponse {
  @ApiProperty({
    description: 'Id film',
    example: '12',
    type: String,
  })
  id: string;
  @ApiProperty({
    description: 'Name film',
    example: 'Fight Club',
    type: String,
  })
  title: string;
}

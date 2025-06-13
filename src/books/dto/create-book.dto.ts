import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Cien años de soledad' })
  title: string;

  @ApiProperty({ example: 'Gabriel García Márquez' })
  author: string;

  @ApiProperty({ example: 'Una novela sobre la historia de la familia Buendía' })
  description: string;
}

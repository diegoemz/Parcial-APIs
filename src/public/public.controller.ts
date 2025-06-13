import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/books/book.entity/book.entity';
import { Repository } from 'typeorm';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('public')
@Controller('public')
export class PublicController {
  constructor(
    @InjectRepository(Book) private bookRepo: Repository<Book>,
  ) {}

  @Get('books')
  @ApiOperation({ summary: 'Obtener todos los libros con sus dueños' })
  @ApiResponse({ status: 200, description: 'Lista de libros obtenida correctamente.' })
  findAll() {
    return this.bookRepo.find({ relations: ['owner'] });
  }
}

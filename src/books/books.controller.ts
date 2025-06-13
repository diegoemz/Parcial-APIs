import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { BooksService } from './books.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateBookDto } from './dto/create-book.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Crear un libro nuevo' })
  @ApiResponse({ status: 201, description: 'Libro creado correctamente.' })
  @ApiResponse({ status: 401, description: 'No autorizado.' })
  @ApiBody({ type: CreateBookDto })
  create(@Body() bookDto: CreateBookDto, @Request() req) {
    return this.booksService.create(bookDto, req.user.userId);
  }
}

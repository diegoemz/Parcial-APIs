import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { Book } from './book.entity/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepo: Repository<Book>,
    private userService: UsersService,
  ) {}

  async create(bookDto, userId: number) {
    const owner = await this.userService.findById(userId);
    const book = this.bookRepo.create({ ...bookDto, owner });
    return this.bookRepo.save(book);
  }
}

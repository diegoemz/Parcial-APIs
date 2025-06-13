import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { UsersModule } from '../users/users.module';
import { Book } from './book.entity/book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    UsersModule,
  ],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}

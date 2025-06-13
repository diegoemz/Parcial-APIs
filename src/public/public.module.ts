import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicController } from './public.controller';
import { Book } from 'src/books/book.entity/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [PublicController],
})
export class PublicModule {}

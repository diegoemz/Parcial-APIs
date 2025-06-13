import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity/user.entity';
import { Book } from './books/book.entity/book.entity';
import { PublicModule } from './public/public.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host:'localhost',
    port: 5432,
    username:'postgres',
    password:'suser',
    database: 'book_exchange',
    entities: [User, Book],
    synchronize: true,
  }),UsersModule, BooksModule, AuthModule, PublicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

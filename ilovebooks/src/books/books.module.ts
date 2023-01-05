import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Entity } from './entities/book.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [
    Entity,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class BooksModule {}

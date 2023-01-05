import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { CoffeeService } from './coffee/coffee.service';
import { BooksService } from './books/books.service';
import { CoffeesModule } from './coffees/coffees.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [CoffeesModule, BooksModule],
  controllers: [AppController, BooksController],
  providers: [AppService, CoffeeService, BooksService],
})
export class AppModule {}

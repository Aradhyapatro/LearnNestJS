import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
  Delete,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookservicearya: BooksService) {}

  @Get('/all')
  findAll() {
    return this.bookservicearya.findAll();
  }

  //native express way can be done
  //but it might become plateform dependent and have compatibility issues
  @Get('/express')
  express(@Res() res) {
    res.status(200).send('express data');
  }

  @Get(':id')
  findByid(@Param('id') id: number) {
    return this.bookservicearya.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.BAD_GATEWAY)
  createAll(@Body() body) {
    this.bookservicearya.create(body);
  }

  @Post('/name')
  create(@Body('firstname') body: CreateBookDto) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateBookDto) {
    return `the necessary changes have been made on id : #${id}`;
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    console.log(typeof id);

    return `the number is ${id}`;
  }
}

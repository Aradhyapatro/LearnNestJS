import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Entity } from './entities/book.entities';

@Injectable()
export class BooksService {
  private details: Entity[] = [
    {
      id: 1,
      name: 'Code of manavas',
      author: ['Arpit Bakshi'],
      critics: ["It's amazing", 'The Best book ever'],
    },
  ];

  findAll() {
    return this.details;
  }

  findOne(id: number) {
    const ind = this.details.find((items) => items.id == +id);

    // if (!ind) {
    //   throw new HttpException(`There is no id ${id}`, HttpStatus.NOT_FOUND);
    // throw 'random error'
    // }

    return ind;
  }

  create(data: any) {
    this.details.push(data);
  }

  update(id: number, data: any) {
    const exist = this.findOne(id);
    if (exist) {
      //logic
    }
  }

  remove(id: number) {
    const index = this.details.findIndex((item) => item.id == +id);
    if (index >= 0) {
      this.details.splice(index, 1);
    }
  }
}

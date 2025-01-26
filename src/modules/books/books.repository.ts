import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksRepository {
  constructor(
    @InjectRepository(Book) private readonly booksRepository: Repository<Book>,
  ) {}

  async save(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async findOneOrNotFoundFail(id: number): Promise<Book> {
    const result = await this.booksRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException('Book not found');
    }
    return result;
  }

  async remove(id: number): Promise<void> {
    this.booksRepository.delete(id);
  }
}

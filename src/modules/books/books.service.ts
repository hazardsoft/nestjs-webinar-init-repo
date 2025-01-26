import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  async getAllBooks(): Promise<Book[]> {
    return this.booksRepository.findAll();
  }

  async getBookById(id: number): Promise<Book> {
    return this.booksRepository.findOneOrNotFoundFail(id);
  }

  async createBook(bookDto: any): Promise<Book> {
    const book = new Book();
    book.title = bookDto.title;
    book.author = bookDto.author;
    book.ageRestriction = bookDto.ageRestriction;
    return this.booksRepository.save(book);
  }

  async deleteBookById(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}

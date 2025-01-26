import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { Book } from './books.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  async getAllBooks(): Promise<Book[]> {
    return this.booksRepository.findAll();
  }

  async getBookById(id: number): Promise<Book> {
    return this.booksRepository.findOneOrNotFoundFail(id);
  }

  async createBook(bookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.title = bookDto.title;
    book.author = bookDto.author;
    book.ageRestriction = bookDto.ageRestriction;
    return this.booksRepository.save(book);
  }

  async updateBookById(id: number, bookDto: UpdateBookDto): Promise<Book> {
    await this.booksRepository.findOneOrNotFoundFail(id);

    const book = new Book();
    if (bookDto.title) {
      book.title = bookDto.title;
    }
    if (bookDto.author) {
      book.author = bookDto.author;
    }
    if (bookDto.ageRestriction) {
      book.ageRestriction = bookDto.ageRestriction;
    }
    if (bookDto.image) {
      book.image = bookDto.image;
    }
    return this.booksRepository.update(id, book);
  }

  async deleteBookById(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}

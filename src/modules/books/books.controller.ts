import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  async getAll(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Book> {
    return this.booksService.getBookById(id);
  }

  @Post()
  async createBook(@Body() bookDto: CreateBookDto): Promise<Book> {
    return this.booksService.createBook(bookDto);
  }

  @Put(':id')
  async updateBook(@Param('id') id: number, @Body() bookDto: UpdateBookDto) {
    return this.booksService.updateBookById(id, bookDto);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<void> {
    await this.booksService.deleteBookById(id);
  }
}

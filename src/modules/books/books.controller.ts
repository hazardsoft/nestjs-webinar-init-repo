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

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  async getAll() {
    return [];
  }

  @Get(':id')
  async getBookById(@Param('id') id: number) {}

  @Post()
  async createBook(@Body() bookDto: any) {}

  @Put()
  async updateBook(@Body() bookDto: any) {}

  @Delete(':id')
  async deleteBook(@Param('id') id: number) {}
}

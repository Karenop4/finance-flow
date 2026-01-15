import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  // Eliminamos findOne y update porque no los creamos en el servicio para el MVP

  @Delete(':id')
  remove(@Param('id') id: string) {
    // ¡OJO AQUÍ! Antes decía (+id), el más (+) lo convertía a número.
    // MongoDB usa IDs tipo string ("65f1..."), así que lo pasamos limpio.
    return this.transactionsService.remove(id);
  }
}
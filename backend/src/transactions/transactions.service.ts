import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const createdTransaction = new this.transactionModel(createTransactionDto);
    return createdTransaction.save();
  }

  async findAll() {
    return this.transactionModel.find().sort({ date: -1 }).exec(); // Ordenado por fecha (más nuevo primero)
  }

  async remove(id: string) {
    return this.transactionModel.findByIdAndDelete(id);
  }
}
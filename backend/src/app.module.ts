import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/financeflow'),
    TransactionsModule]
})
export class AppModule {}

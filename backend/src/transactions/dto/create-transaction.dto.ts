import { IsString, IsNumber, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsEnum(['income', 'expense'])
  type: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsOptional()
  date?: Date;
}
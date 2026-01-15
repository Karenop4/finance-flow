import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // timestamps agrega createdAt y updatedAt solos
export class Transaction extends Document {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  amount: number; // Ej: 100 o -50

  @Prop({ required: true, enum: ['income', 'expense'] })
  type: string;

  @Prop({ required: true })
  category: string; // Ej: "Comida", "Salario"
  
  // La fecha es opcional, si no viene, se pone la actual
  @Prop({ default: Date.now })
  date: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
import { Transaction } from '@/types';
import { Trash2 } from 'lucide-react';

interface Props {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

export default function TransactionList({ transactions, onDelete }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <h3 className="p-4 font-bold text-gray-700 border-b">Historial Reciente</h3>
      {transactions.length === 0 ? (
        <p className="p-8 text-center text-gray-500">No hay movimientos aún.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t._id} className="flex justify-between items-center p-4 border-b last:border-0 hover:bg-gray-50">
              <div>
                <p className="font-medium text-gray-800">{t.description}</p>
                <p className="text-xs text-gray-500">{new Date(t.date).toLocaleDateString()} • {t.category}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-bold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
                </span>
                <button 
                  onClick={() => onDelete(t._id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
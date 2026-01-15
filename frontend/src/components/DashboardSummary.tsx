import { Transaction } from '@/types';

interface Props {
  transactions: Transaction[];
}

export default function DashboardSummary({ transactions }: Props) {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const total = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-sm opacity-80">Saldo Total</h3>
        <p className="text-3xl font-bold">${total.toFixed(2)}</p>
      </div>
      <div className="bg-green-100 text-green-800 p-6 rounded-xl shadow-sm border border-green-200">
        <h3 className="text-sm font-semibold">Ingresos</h3>
        <p className="text-2xl font-bold">+${income.toFixed(2)}</p>
      </div>
      <div className="bg-red-100 text-red-800 p-6 rounded-xl shadow-sm border border-red-200">
        <h3 className="text-sm font-semibold">Gastos</h3>
        <p className="text-2xl font-bold">-${expense.toFixed(2)}</p>
      </div>
    </div>
  );
}
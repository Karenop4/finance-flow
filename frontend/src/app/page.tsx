'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/axios';
import { Transaction } from '@/types';
import DashboardSummary from '@/components/DashboardSummary';
import TransactionList from '@/components/TransactionList';
import TransactionForm from '@/components/TransactionForm';

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Cargar datos al iniciar
  const fetchTransactions = async () => {
    try {
      const { data } = await api.get('/transactions');
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // 2. Manejar nueva transacción
  const handleAddTransaction = async (newTransaction: any) => {
    try {
      await api.post('/transactions', newTransaction);
      fetchTransactions(); // Recargar la lista
    } catch (error) {
      console.error('Error adding transaction:', error);
      alert('Error al guardar');
    }
  };

  // 3. Manejar eliminación
  const handleDeleteTransaction = async (id: string) => {
    if (!confirm('¿Estás seguro de borrar esto?')) return;
    try {
      await api.delete(`/transactions/${id}`);
      fetchTransactions(); // Recargar la lista
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <h1 className="text-2xl font-bold text-gray-900">FinanceFlow</h1>
        </header>

        {loading ? (
          <p className="text-center text-gray-500">Loading dashboard...</p>
        ) : (
          <>
            <DashboardSummary transactions={transactions} />
            <TransactionForm onAdd={handleAddTransaction} />
            <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
          </>
        )}
      </div>
    </main>
  );
}
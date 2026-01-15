import { useState } from 'react';

interface Props {
  onAdd: (data: any) => Promise<void>;
}

export default function TransactionForm({ onAdd }: Props) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    type: 'expense',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;

    await onAdd({
      ...formData,
      amount: Number(formData.amount), // Convertir a número
    });

    // Resetear form
    setFormData({ description: '', amount: '', category: '', type: 'expense' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
      <h3 className="font-bold text-gray-700 mb-4">Agregar Movimiento</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Descripción (ej. Netflix)"
          className="border p-2 rounded-lg w-full"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Monto"
          className="border p-2 rounded-lg w-full"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
        <select
          className="border p-2 rounded-lg w-full"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="expense">Gasto (-)</option>
          <option value="income">Ingreso (+)</option>
        </select>
        <input
          type="text"
          placeholder="Categoría (ej. Ocio)"
          className="border p-2 rounded-lg w-full"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
      </div>
      <button type="submit" className="bg-black text-white w-full mt-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">
        Guardar Transacción
      </button>
    </form>
  );
}
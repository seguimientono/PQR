import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import PQRForm from './components/PQRForm';
import PQRList from './components/PQRList';
import { PQR } from './types/types';

function App() {
  const [pqrs, setPqrs] = useState<PQR[]>([]);

  const handleSubmit = (newPQR: PQR) => {
    setPqrs([newPQR, ...pqrs]);
  };

  const handleUpdateStatus = (id: string, newStatus: PQR['estado']) => {
    setPqrs(
      pqrs.map((pqr) =>
        pqr.id === id ? { ...pqr, estado: newStatus } : pqr
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="text-blue-600" size={24} />
            <h1 className="text-2xl font-bold text-gray-900">Sistema Gestor PQR</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Nueva Solicitud
            </h2>
            <PQRForm onSubmit={handleSubmit} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Solicitudes ({pqrs.length})
            </h2>
            <PQRList pqrs={pqrs} onUpdateStatus={handleUpdateStatus} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
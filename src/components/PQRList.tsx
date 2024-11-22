import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { PQR } from '../types/types';

interface PQRListProps {
  pqrs: PQR[];
  onUpdateStatus: (id: string, newStatus: PQR['estado']) => void;
}

export default function PQRList({ pqrs, onUpdateStatus }: PQRListProps) {
  const getStatusColor = (estado: PQR['estado']) => {
    switch (estado) {
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'En Proceso':
        return 'bg-blue-100 text-blue-800';
      case 'Resuelto':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (estado: PQR['estado']) => {
    switch (estado) {
      case 'Pendiente':
        return <Clock size={18} />;
      case 'En Proceso':
        return <AlertCircle size={18} />;
      case 'Resuelto':
        return <CheckCircle size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {pqrs.map((pqr) => (
        <div key={pqr.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{pqr.asunto}</h3>
              <p className="text-sm text-gray-500">
                {new Date(pqr.fecha).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(
                pqr.estado
              )}`}
            >
              {getStatusIcon(pqr.estado)}
              {pqr.estado}
            </span>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {pqr.tipo}
            </span>
          </div>

          <p className="text-gray-700 mb-4">{pqr.descripcion}</p>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{pqr.email}</span>
            <select
              value={pqr.estado}
              onChange={(e) => onUpdateStatus(pqr.id, e.target.value as PQR['estado'])}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Pendiente">Pendiente</option>
              <option value="En Proceso">En Proceso</option>
              <option value="Resuelto">Resuelto</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}
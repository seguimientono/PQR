import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { TipoPQR } from '../types/types';

interface PQRFormProps {
  onSubmit: (data: any) => void;
}

export default function PQRForm({ onSubmit }: PQRFormProps) {
  const [formData, setFormData] = useState({
    tipo: 'Petición' as TipoPQR,
    asunto: '',
    descripcion: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: Date.now().toString(),
      fecha: new Date().toISOString(),
      estado: 'Pendiente',
    });
    setFormData({
      tipo: 'Petición',
      asunto: '',
      descripcion: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tipo de Solicitud
        </label>
        <select
          value={formData.tipo}
          onChange={(e) => setFormData({ ...formData, tipo: e.target.value as TipoPQR })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="Petición">Petición</option>
          <option value="Queja">Queja</option>
          <option value="Reclamo">Reclamo</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Asunto
        </label>
        <input
          type="text"
          value={formData.asunto}
          onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          value={formData.descripcion}
          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Correo Electrónico
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Send size={20} />
        Enviar Solicitud
      </button>
    </form>
  );
}
export interface PQR {
  id: string;
  tipo: 'Petición' | 'Queja' | 'Reclamo';
  asunto: string;
  descripcion: string;
  estado: 'Pendiente' | 'En Proceso' | 'Resuelto';
  fecha: string;
  email: string;
}

export type TipoPQR = 'Petición' | 'Queja' | 'Reclamo';
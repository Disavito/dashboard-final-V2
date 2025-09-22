import { Database } from './database.types';

export type SocioTitular = Database['public']['Tables']['socio_titulares']['Row'];
export type Cuenta = Database['public']['Tables']['cuentas']['Row'];

// Define el tipo para la parte de socio_titulares que se une
export interface JoinedSocioTitular {
  localidad: string | null;
}

// Extiende el tipo Ingreso para incluir la relación con socio_titulares
export type Ingreso = Database['public']['Tables']['ingresos']['Row'] & {
  socio_titulares?: JoinedSocioTitular | null;
};

export type Colaborador = Database['public']['Tables']['colaboradores']['Row'];
export type Gasto = Database['public']['Tables']['gastos']['Row'];

// Nuevos tipos exportados para resolver errores TS2305

export type EconomicSituationOption = {
  value: 'Pobre' | 'Extremo Pobre';
  label: string;
};

export type TransactionFormValues = {
  accountName: string;
  transactionType: 'Ingreso' | 'Anulacion' | 'Devolucion' | 'Gasto';
  amount: number;
  date: Date;
  description?: string;
  category?: string; // Only for Gasto
  sub_category?: string;
  receiptNumber?: string; // Only for Ingreso
  dni?: string; // Only for Ingreso
  fullName?: string; // Only for Ingreso
  numeroOperacion?: string; // Only for Ingreso
  numeroGasto?: string; // Only for Gasto
  colaboradorId?: string; // Only for Gasto
};

// Tipo de unión para representar cualquier transacción (Ingreso o Gasto)
export type Transaction = Ingreso | Gasto;

import { operadorasData } from '../../operadoras/data/operadoras.data';
import { Contract } from '../interfaces/contract.interface';
import { cantonesData } from './contones.data';
import { contraTypeData } from './contract-type.data';
import { parroquiasData } from './parroquias.data';
import { provinciasData } from './pronvicias.data';
import { sectoresData } from './sectores.data';

export const contratosData: Contract[] = [
  {
    codigo: '001',
    cantidad: 10,
    fechaInicio: '10-10-2024',
    fechaFin: '10-10-2025',
    fechaFirma: '10-10-2024',
    numero: 'cdfo12-213',
    operadora: operadorasData[0],
    sector: sectoresData[0],
    tipoContrato: contraTypeData[0],
    valorTotal: 2314.21,
    observacion: 'Ninguna',
  },
  {
    codigo: '002',
    cantidad: 5,
    fechaInicio: '15-10-2024',
    fechaFin: '15-10-2025',
    fechaFirma: '15-10-2024',
    numero: 'ghik56-789',
    operadora: operadorasData[1],
    sector: sectoresData[1],
    tipoContrato: contraTypeData[1],
    valorTotal: 1500.00,
    observacion: 'Revisión anual programada.',
  },
  {
    codigo: '003',
    cantidad: 20,
    fechaInicio: '20-11-2024',
    fechaFin: '20-11-2025',
    fechaFirma: '20-11-2024',
    numero: 'jklm34-567',
    operadora: operadorasData[2],
    sector: sectoresData[2],
    tipoContrato: contraTypeData[1],
    valorTotal: 4500.50,
    observacion: 'Incluye soporte técnico.',
  },
  {
    codigo: '004',
    cantidad: 15,
    fechaInicio: '01-12-2024',
    fechaFin: '01-12-2025',
    fechaFirma: '01-12-2024',
    numero: 'mnop90-123',
    operadora: operadorasData[0],
    sector: sectoresData[3],
    tipoContrato: contraTypeData[0],
    valorTotal: 2700.75,
    observacion: 'Entrega de materiales anticipada.',
  },
  {
    codigo: '005',
    cantidad: 8,
    fechaInicio: '05-01-2025',
    fechaFin: '05-01-2026',
    fechaFirma: '05-01-2025',
    numero: 'qrst78-456',
    operadora: operadorasData[1],
    sector: sectoresData[4],
    tipoContrato: contraTypeData[1],
    valorTotal: 1800.25,
    observacion: 'Evaluación de desempeño anual.',
  },
  {
    codigo: '006',
    cantidad: 12,
    fechaInicio: '10-02-2025',
    fechaFin: '10-02-2026',
    fechaFirma: '10-02-2025',
    numero: 'uvwx12-345',
    operadora: operadorasData[2],
    sector: sectoresData[5],
    tipoContrato: contraTypeData[1],
    valorTotal: 3200.00,
    observacion: 'Descuento por pronto pago.',
  },
  {
    codigo: '007',
    cantidad: 25,
    fechaInicio: '15-03-2025',
    fechaFin: '15-03-2026',
    fechaFirma: '15-03-2025',
    numero: 'yzab89-234',
    operadora: operadorasData[0],
    sector: sectoresData[6],
    tipoContrato: contraTypeData[0],
    valorTotal: 5400.80,
    observacion: 'Proyecto de larga duración.',
  },
  {
    codigo: '008',
    cantidad: 18,
    fechaInicio: '20-04-2025',
    fechaFin: '20-04-2026',
    fechaFirma: '20-04-2025',
    numero: 'cdef45-678',
    operadora: operadorasData[1],
    sector: sectoresData[7],
    tipoContrato: contraTypeData[1],
    valorTotal: 2900.55,
    observacion: 'Incluye capacitación.',
  },
  {
    codigo: '009',
    cantidad: 14,
    fechaInicio: '25-05-2025',
    fechaFin: '25-05-2026',
    fechaFirma: '25-05-2025',
    numero: 'ghij23-456',
    operadora: operadorasData[2],
    sector: sectoresData[8],
    tipoContrato: contraTypeData[0],
    valorTotal: 2200.99,
    observacion: 'Condiciones especiales de pago.',
  },
  {
    codigo: '010',
    cantidad: 30,
    fechaInicio: '01-06-2025',
    fechaFin: '01-06-2026',
    fechaFirma: '01-06-2025',
    numero: 'klmn01-234',
    operadora: operadorasData[0],
    sector: sectoresData[9],
    tipoContrato: contraTypeData[0],
    valorTotal: 7500.10,
    observacion: 'Revisión trimestral programada.',
  },
];


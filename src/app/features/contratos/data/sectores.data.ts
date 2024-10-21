import { Sector } from "../interfaces/sector.interface";
import { cantonesData } from "./contones.data";
import { parroquiasData } from "./parroquias.data";
import { provinciasData } from "./pronvicias.data";

export const sectoresData: Sector[] = [
  {
    codigo: '01010101',
    sectores: 'Comercial',
    direcciones: 'Calle 1, Ambato',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0101')!,
    parroquia: parroquiasData.find(p => p.codigo === '010101')!,
  },
  {
    codigo: '01010102',
    sectores: 'Educación',
    direcciones: 'Calle 2, Ambato',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0101')!,
    parroquia: parroquiasData.find(p => p.codigo === '010101')!,
  },
  {
    codigo: '01010103',
    sectores: 'Salud',
    direcciones: 'Calle 3, Ambato',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0101')!,
    parroquia: parroquiasData.find(p => p.codigo === '010101')!,
  },
  {
    codigo: '01010201',
    sectores: 'Turismo',
    direcciones: 'Calle 4, Baños de Agua Santa',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0102')!,
    parroquia: parroquiasData.find(p => p.codigo === '010201')!,
  },
  {
    codigo: '01010202',
    sectores: 'Restauración',
    direcciones: 'Calle 5, Baños de Agua Santa',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0102')!,
    parroquia: parroquiasData.find(p => p.codigo === '010201')!,
  },
  {
    codigo: '01030101',
    sectores: 'Agricultura',
    direcciones: 'Calle 6, Cevallos',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0103')!,
    parroquia: parroquiasData.find(p => p.codigo === '010301')!,
  },
  {
    codigo: '01040101',
    sectores: 'Comercio Local',
    direcciones: 'Calle 7, Mocha',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0104')!,
    parroquia: parroquiasData.find(p => p.codigo === '010401')!,
  },
  {
    codigo: '01050101',
    sectores: 'Textiles',
    direcciones: 'Calle 8, Pelileo',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0105')!,
    parroquia: parroquiasData.find(p => p.codigo === '010501')!,
  },
  {
    codigo: '01060101',
    sectores: 'Cultura',
    direcciones: 'Calle 9, Tisaleo',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0106')!,
    parroquia: parroquiasData.find(p => p.codigo === '010601')!,
  },
  {
    codigo: '01010104',
    sectores: 'Deportes',
    direcciones: 'Calle 10, Ambato',
    provincia: provinciasData.find(p => p.codigo === 'S')!,
    canton: cantonesData.find(c => c.codigo === '0101')!,
    parroquia: parroquiasData.find(p => p.codigo === '010101')!,
  },
];
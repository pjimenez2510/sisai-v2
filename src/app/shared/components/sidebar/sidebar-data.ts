import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Operadoras',
  },
  {
    displayName: 'Listado',
    iconName: 'list',
    route: '/main/operadoras/lista',
  },
  {
    displayName: 'Crear',
    iconName: 'add',
    route: '/main/operadoras/crear',
  },
  {
    navCap: 'Contratos',
    divider: true,
  },
  {
    displayName: 'Listado',
    iconName: 'list',
    route: '/main/contratos/lista',
  },
  {
    displayName: 'Crear',
    iconName: 'add',
    route: '/main/contratos/crear',
  },
  {
    navCap: 'Documentos',
    divider: true,
  },
  {
    displayName: 'Listado',
    iconName: 'list',
    route: '/main/documentos/lista',
  },
  {
    displayName: 'Crear',
    iconName: 'add',
    route: '/main/documentos/crear',
  },
];

import { MenuItem } from '../interfaces/menu-item.interface';

export const menuItems: MenuItem[] = [
  {
    icon: 'call_log',
    label: 'Operadoras',
    children: [
      {
        icon: 'list',
        label: 'Lista',
        route: '/main/operadoras/lista',
      },
      {
        icon: 'add',
        label: 'Crear',
        route: '/main/operadoras/crear',
      },
    ],
  },
  {
    icon: 'description',
    label: 'Contratos',
    children: [
      {
        icon: 'list',
        label: 'Lista',
        route: '/main/contratos/lista',
      },
      {
        icon: 'add',
        label: 'Crear',
        route: '/main/contratos/crear',
      },
    ],
  },
  {
    icon: 'folder',
    label: 'Documentos',
    children: [
      {
        icon: 'list',
        label: 'Lista',
        route: '/main/documentos/lista',
      },
      {
        icon: 'add',
        label: 'Crear',
        route: '/main/documentos/crear',
      },
    ],
  },

  {
    icon: 'attach_money',
    label: 'Pagos',
    route: '/main/pagos/lista',
  },
];

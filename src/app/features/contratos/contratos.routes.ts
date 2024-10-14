import { Routes } from '@angular/router';
import { CreateContratosComponent } from './presentation/pages/create-contratos/create-contratos.component';
import { ListContratosComponent } from './presentation/pages/list-contratos/list-contratos.component';

export const contratosRoutes: Routes = [
  {
    path: 'crear',
    component: CreateContratosComponent,
  },
  {
    path: 'lista',
    component: ListContratosComponent,
  },
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
];

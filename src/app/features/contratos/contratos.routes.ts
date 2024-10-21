import { Routes } from '@angular/router';
import { CreateContratosComponent } from './presentation/pages/create-contratos/create-contratos.component';
import { ListContratosComponent } from './presentation/pages/list-contratos/list-contratos.component';
import { ViewContratoComponent } from './presentation/pages/view-contrato/view-contrato.component';

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
    path: 'view/:id',
    component: ViewContratoComponent
  },
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
];

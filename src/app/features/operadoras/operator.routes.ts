import { Routes } from '@angular/router';
import { ListOperadorasComponent } from './presentation/pages/list-operadoras/list-operadoras.component';
import { CreateOperadorasComponent } from './presentation/pages/create-operadoras/create-operadoras.component';

export const operatorRoutes: Routes = [
  {
    path: 'crear',
    component: CreateOperadorasComponent,
  },
  {
    path: 'lista',
    component: ListOperadorasComponent,
  },
  {
    path: '',
    redirectTo: 'crear',
    pathMatch: 'full',
  },
];

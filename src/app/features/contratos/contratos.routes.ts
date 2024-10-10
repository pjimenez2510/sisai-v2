import { Routes } from '@angular/router';
import { CreateComponent } from './presentation/pages/create/create.component';
import { ListComponent } from './presentation/pages/list/list.component';

export const contratosRoutes: Routes = [
  {
    path: 'crear',
    component: CreateComponent,
  },
  {
    path: 'lista',
    component: ListComponent,
  },
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
];

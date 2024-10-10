import { Routes } from '@angular/router';
import { ListComponent } from './presentation/pages/list/list.component';
import { CreateComponent } from './presentation/pages/create/create.component';

export const documentosRoutes: Routes = [
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

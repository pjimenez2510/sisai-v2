import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {
        path: 'operadoras',
        loadChildren: () =>
          import('./features/operadoras/operator.routes').then(
            (m) => m.operatorRoutes,
          ),
      },
      {
        path: 'contratos',
        loadChildren: () =>
          import('./features/contratos/contratos.routes').then(
            (m) => m.contratosRoutes,
          ),
      },
      {
        path: 'documentos',
        loadChildren: () =>
          import('./features/documentos/documentos.routes').then(
            (m) => m.documentosRoutes,
          ),
      },
      {
        path: '',
        redirectTo: 'operadoras',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { OperatorRepository } from './features/operadoras/domain/repositories/operator.repository';
import { OperatorRepositoryImpl } from './features/operadoras/infraestructure/repositories/operator.respository';
import { OperatorInfraestructureModule } from './features/operadoras/infraestructure/operator.infraestructure.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    { provide: OperatorRepository, useClass: OperatorRepositoryImpl },
  ],
};

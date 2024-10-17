import { inject, Injectable } from '@angular/core';
import { IFacade } from '../../../core/interfaces/facade.interface';
import {
  Canton,
  CreateSector,
  Parroquia,
  Provincia,
  Sector,
  UpdateSector,
} from '../interfaces/sector.interface';
import { Observable } from 'rxjs';
import { SectorService } from '../services/sector.service';
import { MessageWrapedService } from '../../../shared/services/message-wraped.service';

@Injectable({
  providedIn: 'root',
})
export class SectorFacade
  implements IFacade<Sector, CreateSector, UpdateSector>
{
  sectorService = inject(SectorService);
  messageService = inject(MessageWrapedService);

  getEntity(id: number): Observable<Sector> {
    return this.sectorService.getById(id);
  }
  getAllEntities(): Observable<Sector[]> {
    return this.sectorService.getAll();
  }
  createEntity(params: CreateSector): Observable<Sector> {
    return this.sectorService.create(params);
  }
  updateEntity(id: number, params: UpdateSector): Observable<Sector> {
    return this.sectorService.update(id, params);
  }
  deleteEntity(id: number): Observable<boolean> {
    return this.sectorService.delete(id);
  }

  getAllProvincias(): Observable<Provincia[]> {
    return this.sectorService.getAllProvincias();
  }

  getCantonesByProvincias(codigoProvincia: string): Observable<Canton[]> {
    return this.sectorService.getCantonesByProvincias(codigoProvincia);
  }

  getParroquiasByCanton(codigoCanton: string): Observable<Parroquia[]> {
    return this.sectorService.getParroquiasByCanton(codigoCanton);
  }
}

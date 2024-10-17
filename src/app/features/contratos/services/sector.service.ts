import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../core/services/base-http.service';
import {
  Canton,
  CreateSector,
  Parroquia,
  Provincia,
  Sector,
  UpdateSector,
} from '../interfaces/sector.interface';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { provinciasData } from '../data/pronvicias.data';
import { cantonesData } from '../data/contones.data';
import { parroquiasData } from '../data/parroquias.data';

@Injectable({
  providedIn: 'root',
})
export class SectorService extends BaseHttpService<
  Sector,
  CreateSector,
  UpdateSector
> {
  protected override baseUrl: string = `${environment.apiUrl}/sector`;
  protected override extractSingleItem(response: any) {
    return response.data;
  }
  protected override extractArrayItems(response: any): any[] {
    return response.data;
  }

  getAllProvincias(): Observable<Provincia[]> {
    return of(provinciasData);
  }

  getCantonesByProvincias(codigoProvincia: string): Observable<Canton[]> {
    const canton = cantonesData.filter(
      (canton) => canton.codigoProvincia === codigoProvincia
    );
    return of(canton);
  }

  getParroquiasByCanton(codigoCanton: string): Observable<Parroquia[]> {
    const paraquias = parroquiasData.filter(
      (parroquia) => parroquia.codigoCanton === codigoCanton
    );
    return of(paraquias);
  }
}

import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../core/services/base-http.service';
import {
  Contract,
  CreateContract,
  UpdateContract,
} from '../interfaces/contract.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContractService extends BaseHttpService<
  Contract,
  CreateContract,
  UpdateContract
> {
  protected override baseUrl: string = `${environment.apiUrl}/contractos`;

  protected override extractSingleItem(response: any) {
    return response.data;
  }
  protected override extractArrayItems(response: any): any[] {
    return response.data;
  }
}

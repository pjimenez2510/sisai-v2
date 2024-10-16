import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../core/services/base-http.service';
import {
  CreateOperator,
  Operator,
  UpdateOperator,
} from '../interfaces/operator.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperatorService extends BaseHttpService<
  Operator,
  CreateOperator,
  UpdateOperator
> {
  protected override baseUrl: string = `${environment.apiUrl}/operadoras`;

  protected override extractSingleItem(response: any) {
    return response.data;
  }
  protected override extractArrayItems(response: any): any[] {
    return response.data;
  }
}

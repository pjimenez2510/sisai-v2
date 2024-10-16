import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable, inject } from '@angular/core';

@Injectable()
export abstract class BaseHttpService<T, CreateParams, UpdateParams> {
  protected http = inject(HttpClient);
  protected abstract baseUrl: string;

  getById(id: number): Observable<T> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getAll(): Observable<T[]> {
    return this.http.get<any>(this.baseUrl).pipe(map(this.extractArrayItems));
  }

  create(params: CreateParams): Observable<T> {
    return this.http.post<any>(this.baseUrl, params);
  }

  update(id: number, params: UpdateParams): Observable<T> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, params);
  }

  delete(id: number): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<boolean>(url);
  }

  protected abstract extractSingleItem(response: any): any;
  protected abstract extractArrayItems(response: any): any[];
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  constructor(public http: HttpClient) {}

  private todoUrl = 'http://localhost:3000/todo';

  public getTodo(): Observable<any> {
    return this.http.get<any>(`${this.todoUrl}`);
  }

  public addNew(value): Observable<any> {
    return this.http.post<any>(`${this.todoUrl}`, { 'value': value });
  }

  public removeTodo(id): Observable<any> {
    return this.http.delete<any>(`${this.todoUrl}/${id}`, {});
  }

  public updateTodo(data): Observable<any> {
    return this.http.put<any>(`${this.todoUrl}/update`, { data });
  }

  public deleteAll(data): Observable<any> {
    return this.http.request<any>('delete', `${this.todoUrl}`, { body: data });
  }

  public completeAll(data): Observable<any> {
    return this.http.put<any>(`${this.todoUrl}`, { data });
  }
}

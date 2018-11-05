import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/kanban-board';

@Injectable()
export class KanbanBoardService {
  readonly path = '/boards';

  constructor(private _http: HttpClient) {}

  getAll() {
    return this._http.get(this.path) as Observable<Card>;
  }
  delete(pbe: Card) {
    return this._http.delete(this.path + '/' + pbe.id) as Observable<Card>;
  }
  create(pbe: Card) {
    return this._http.post(this.path, pbe) as Observable<Card>;
  }
  update(pbe: Card) {
    return this._http.put(this.path + '/' + pbe.id, pbe) as Observable<Card>;
  }
}

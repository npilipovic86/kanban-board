import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Kanban } from '../model/kanban'

@Injectable({
    providedIn: 'root'
})
export class KanbanService {
    readonly path = '/api/kanbans'

    constructor(private _http: HttpClient) {}

    getAll(): Observable<Kanban[]> {
        return this._http.get<Kanban[]>(this.path)
    }
    getById(id: String): Observable<Kanban> {
        return this._http.get<Kanban>(this.path + '/' + id)
    }
    delete(pbe: Kanban): Observable<void> {
        return this._http.delete<void>(this.path + '/' + pbe.id)
    }
    create(title: string): Observable<Kanban> {
        return this._http.post<Kanban>(this.path, { title })
    }
    update(pbe: Kanban): Observable<Kanban> {
        return this._http.put<Kanban>(this.path + '/' + pbe.id, pbe)
    }
}

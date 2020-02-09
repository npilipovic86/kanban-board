import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Kanban } from '../model/kanban'
import { Task } from '../model/task'

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
        // .map((result: Response) => result.json())
        // .catch(this.getError)
    }
    delete(id: string): Observable<void> {
        return this._http.delete<void>(this.path + '/' + id)
    }
    create(title: string): Observable<Kanban> {
        return this._http.post<Kanban>(this.path, { title })
    }
    update(pbe: Kanban): Observable<Kanban> {
        return this._http.put<Kanban>(this.path + '/' + pbe.id, pbe)
    }
    saveNewTaskInKanban(kanbanId: string, task: Task): Observable<Task> {
        return this._http.post<Task>(this.path + '/' + kanbanId + '/tasks', task)
    }
}

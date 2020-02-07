import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Task } from '../model/task'

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    readonly path = '/api/tasks'

    constructor(private _http: HttpClient) {}

    getAll(): Observable<Task[]> {
        return this._http.get<Task[]>(this.path)
    }
    getById(id: String): Observable<Task> {
        return this._http.get<Task>(this.path + '/' + id)
    }
    delete(pbe: Task): Observable<void> {
        return this._http.delete<void>(this.path + '/' + pbe.id)
    }
    create(pbe: Task): Observable<Task> {
        return this._http.post<Task>(this.path, pbe)
    }
    update(pbe: Task): Observable<Task> {
        return this._http.put<Task>(this.path + '/' + pbe.id, pbe)
    }
}

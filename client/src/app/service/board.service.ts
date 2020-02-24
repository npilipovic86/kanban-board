import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Board } from '../model/board'
import { Task } from '../model/task'

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    readonly path = '/api/boards'

    constructor(private _http: HttpClient) {}

    getAll(): Observable<Board[]> {
        return this._http.get<Board[]>(this.path)
    }
    getById(id: String): Observable<Board> {
        return this._http.get<Board>(this.path + '/' + id)
    }
    delete(id: string): Observable<void> {
        return this._http.delete<void>(this.path + '/' + id)
    }
    create(title: string): Observable<Board> {
        return this._http.post<Board>(this.path, { title })
    }
    update(pbe: Board): Observable<Board> {
        return this._http.put<Board>(this.path + '/' + pbe.id, pbe)
    }
    saveNewTaskInKanban(boardId: string, task: Task): Observable<Task> {
        return this._http.post<Task>(this.path + '/' + boardId + '/tasks', task)
    }

    saveNewList(boardId: string, value: any) {
        return this._http.post<any>(this.path + '/' + boardId + '/lists', value)
    }
}

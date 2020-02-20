import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Board } from '../model/board'
import { Task } from '../model/task'

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    readonly path = '/api/kanbans'

    constructor(private _http: HttpClient) {}

    getAll(): Observable<Board[]> {
        return this._http.get<Board[]>(this.path)
    }
    getById(id: String): Observable<Board> {
        return this._http.get<Board>(this.path + '/' + id)
        // .map((result: Response) => result.json())
        // .catch(this.getError)
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
    saveNewTaskInKanban(kanbanId: string, task: Task): Observable<Task> {
        return this._http.post<Task>(this.path + '/' + kanbanId, task)
    }

    saveNewList(boardId: string, value: any) {
        return this._http.post<any>(this.path + '/' + boardId + '/lists', value)
    }
}

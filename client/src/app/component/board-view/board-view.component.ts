import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { ActivatedRoute } from '@angular/router'
import { Board } from 'src/app/model/board'
import { Task } from 'src/app/model/task'
import { BoardService } from 'src/app/service/board.service'
import { TaskService } from 'src/app/service/task.service'
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'
import { KanbanDialogComponent } from '../kanban-dialog/kanban-dialog.component'
import { TaskDialogComponent } from '../task-dialog/task-dialog.component'

@Component({
    selector: 'app-board-view',
    templateUrl: './board-view.component.html',
    styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit {
    board: Board
    lists: any = []

    constructor(private _boardService: BoardService, private _taskService: TaskService, private route: ActivatedRoute, private dialog: MatDialog) {}

    ngOnInit() {
        this.getBoard()
    }

    deleteTask(id: string): void {
        this.confirm()
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this._taskService.delete(id).subscribe(() => {
                        let index = this.board.tasks.findIndex((e) => e.id === id)
                        this.board.tasks.splice(index, 1)
                        this.splitTasksByStatus()
                    })
                }
            })
    }

    confirm(): any {
        return this.dialog.open(ConfirmationDialogComponent, {
            width: '350px',
            data: 'Do you want to delete this item?'
        })
    }

    dropListConnectedTo(): string[] {
        return this.board.lists.map((e) => e.title)
    }

    openDialogForNewTask(): void {
        this.openDialogForTask('Create New Task', new Task())
    }

    openDialogForEditTask(task: Task): void {
        this.openDialogForTask('Update Task', task)
    }

    openDialogForTask(dialogTitle: string, task: Task): void {
        const dialogConfig = new MatDialogConfig<any>()
        dialogConfig.autoFocus = true
        dialogConfig.data = {
            dialogTitle: dialogTitle,
            boardId: this.board.id,
            column: this.board.lists[0].title,
            task: task
        }
        this.dialog
            .open(TaskDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    let res = this.board.tasks.find((e) => e.id === result.id)
                    if (!res) {
                        this.board.tasks.push(result)
                    } else {
                        let index = this.board.tasks.findIndex((e) => e.id === result.id)
                        this.board.tasks[index] = result
                    }
                    this.splitTasksByStatus()
                }
            })
    }

    openDialogForEditList(): void {
        event.cancelBubble = true
        if (event.stopPropagation) event.stopPropagation()
        this.openDialogForList('Update List')
    }

    openDialogForNewList(): void {
        this.openDialogForList('Create new List')
    }

    openDialogForList(dialogTitle: string): void {
        const dialogConfig = new MatDialogConfig()
        dialogConfig.autoFocus = true
        dialogConfig.data = {
            dialogTitle: dialogTitle,
            boardId: this.board.id
        }
        this.dialog
            .open(KanbanDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.board.lists.push(result)
                    this.getBoard()
                }
            })
    }

    drop(event: CdkDragDrop<any>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
        } else {
            this.updateTaskStatusAfterDragDrop(event)
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
        }
    }

    private updateTaskStatusAfterDragDrop(event: CdkDragDrop<string[], string[]>): void {
        let taskId = event.item.element.nativeElement.id
        let containerId = event.container.id
        let task = this.board.tasks.find((t) => t.id === taskId)
        if (task) this.updateTaskStatus(task, containerId)
    }

    private getBoard(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this._boardService.getById(id).subscribe((response: Board) => {
            this.board = response
            this.splitTasksByStatus()
        })
    }

    private updateTaskStatus(task: Task, containerId: string): void {
        task.status = containerId
        this._taskService.update(task).subscribe()
    }

    private splitTasksByStatus(): void {
        this.board.lists.forEach((l) => {
            this.lists[l.title] = this.board.tasks.filter((t) => t.status === l.title)
        })
    }
}

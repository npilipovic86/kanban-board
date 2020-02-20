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
    kanban: Board
    lists: any = []

    kanbans: Board[]

    constructor(
        // private _boardService: BoardService,
        private _kanbanService: BoardService,
        private _taskService: TaskService,
        private route: ActivatedRoute,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.getKanban()
    }
    deleteTask(id: string) {
        console.log(id)
        this.confirm()
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this._taskService.delete(id).subscribe(() => {
                        let index = this.kanban.tasks.findIndex((e) => e.id === id)
                        this.kanban.tasks.splice(index, 1)
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

    dropListConnectedTo() {
        return this.kanban.lists.map((e) => e.title)
    }
    openDialogForNewTask(): void {
        this.openDialog('Create New Task', new Task())
    }

    openDialogForEditTask(task: Task): void {
        this.openDialog('Update Task', task)
    }

    openDialog(title: string, task: Task): void {
        const dialogConfig = new MatDialogConfig<any>()
        dialogConfig.autoFocus = true
        dialogConfig.data = {
            title: title,
            boardId: this.route.snapshot.paramMap.get('id'),
            column: this.kanban.lists[0].title,
            task: task
        }
        this.dialog
            .open(TaskDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    let res = this.kanban.tasks.find((e) => e.id === result.id)
                    if (!res) {
                        this.kanban.tasks.push(result)
                    } else {
                        let index = this.kanban.tasks.findIndex((e) => e.id === result.id)
                        this.kanban.tasks[index] = result
                    }
                    this.splitTasksByStatus()
                }
            })
    }

    openDialogForEditList(list: string) {
        event.cancelBubble = true
        if (event.stopPropagation) event.stopPropagation()
        this.openDialogForList('Update Kanban')
    }
    openDialogForNewList(): void {
        this.openDialogForList('Create new Kanban')
    }
    openDialogForList(title: string): void {
        const dialogConfig = new MatDialogConfig()
        dialogConfig.autoFocus = true
        dialogConfig.data = {
            title: title,
            boardId: this.route.snapshot.paramMap.get('id')
        }
        this.dialog
            .open(KanbanDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.kanban.lists.push(result)
                } else {
                    this.getKanban()
                }
            })
    }
    drop(event: CdkDragDrop<any>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
        } else {
            this.updateTaskStatusAfterDragDrop(event)
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
        }
    }

    private updateTaskStatusAfterDragDrop(event: CdkDragDrop<string[], string[]>) {
        let taskId = event.item.element.nativeElement.id

        let containerId = event.container.id

        let task = this.kanban.tasks.find((t) => t.id === taskId)

        if (task) this.updateTaskStatus(task, containerId)
    }

    private getKanban(): void {
        const id = this.route.snapshot.paramMap.get('id')

        this._kanbanService.getById(id).subscribe((response: Board) => {
            this.kanban = response
            this.splitTasksByStatus()
        })
    }

    private updateTaskStatus(task: Task, containerId: string): void {
        task.status = containerId

        this._taskService.update(task).subscribe()
    }

    private splitTasksByStatus(): void {
        this.kanban.lists.forEach((l) => {
            this.lists[l.title] = this.kanban.tasks.filter((t) => t.status === l.title)
        })

        console.log('lists', this.lists)
    }
}

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { ActivatedRoute } from '@angular/router'
import { Kanban } from 'src/app/model/kanban'
import { Task } from 'src/app/model/task'
import { KanbanService } from 'src/app/service/kanban.service'
import { TaskService } from 'src/app/service/task.service'
import { TaskDialogComponent } from '../task-dialog/task-dialog.component'

@Component({
    selector: 'app-kanban',
    templateUrl: './kanban.component.html',
    styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
    kanban: Kanban
    todos: Task[]
    inProgress: Task[]
    dones: Task[] = []

    constructor(private _kanbanService: KanbanService, private _taskService: TaskService, private route: ActivatedRoute, private dialog: MatDialog) {
        this.todos = []
        this.inProgress = []
        this.dones = []
    }

    ngOnInit() {
        this.getKanban()
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
            kanbanId: this.kanban.id,
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
                    this.splitTasksByStatus(this.kanban.tasks)
                }
            })
    }
    drop(event: CdkDragDrop<string[]>) {
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
        let task = this.kanban.tasks.find((e) => e.id === taskId)
        this.updateTaskStatus(task, containerId)
    }

    private getKanban(): void {
        const id = this.route.snapshot.paramMap.get('id')

        this._kanbanService.getById(id).subscribe((response: Kanban) => {
            this.kanban = response
            this.splitTasksByStatus(this.kanban.tasks)
        })
    }

    private updateTaskStatus(task: Task, containerId: string): void {
        if (containerId === 'todo') {
            task.status = 'TODO'
        } else if (containerId === 'inpro') {
            task.status = 'INPROGRESS'
        } else {
            task.status = 'DONE'
        }
        this._taskService.update(task).subscribe()
    }

    private splitTasksByStatus(tasks: Task[]): void {
        this.todos = tasks.filter((t) => t.status === 'TODO')
        this.inProgress = tasks.filter((t) => t.status === 'INPROGRESS')
        this.dones = tasks.filter((t) => t.status === 'DONE')
    }
}

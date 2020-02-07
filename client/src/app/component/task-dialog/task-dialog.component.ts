import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Task } from 'src/app/model/task'
import { KanbanService } from 'src/app/service/kanban.service'
import { TaskService } from 'src/app/service/task.service'

@Component({
    selector: 'app-task-dialog',
    templateUrl: './task-dialog.component.html',
    styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {
    kanbanId: string
    kanbanTitle: string
    form: FormGroup
    task: Task

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<TaskDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private kanbanService: KanbanService,
        private taskService: TaskService
    ) {
        this.kanbanTitle = data.title
        this.kanbanId = data.kanbanId

        this.task = new Task()
    }

    ngOnInit() {
        this.form = this.fb.group({
            title: [this.task.title, Validators.required],
            description: [this.task.description, Validators.required],
            color: [this.task.color, Validators.required],
            status: ['TODO']
        })
    }
    close(task?: Task) {
        this.dialogRef.close(task)
    }
    save() {
        if (!this.task.id) {
            this.kanbanService.saveNewTaskInKanban(this.kanbanId, this.form.value).subscribe((response: Task) => {
                this.close(response)
            })
        } else {
            this.taskService.update(this.form.value).subscribe((response: Task) => {
                this.close(response)
            })
        }
    }
}

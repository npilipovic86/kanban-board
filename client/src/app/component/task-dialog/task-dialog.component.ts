import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Task } from 'src/app/model/task'
import { BoardService } from 'src/app/service/board.service'
import { TaskService } from 'src/app/service/task.service'
import { FormService } from '../../service/form.service'

@Component({
    selector: 'app-task-dialog',
    templateUrl: './task-dialog.component.html',
    styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {
    kanbanId: string
    dialogTitle: string
    form: FormGroup
    task: Task
    // kanbans: any
    column: any

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<TaskDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private _kanbanService: BoardService,
        private _taskService: TaskService,
        private _formService: FormService
    ) {
        this.dialogTitle = data.dialogTitle
        this.column = data.column
        this.kanbanId = data.boardId
        this.task = data.task
    }

    ngOnInit() {
        this.form = this.fb.group(
            {
                title: [this.task.title, Validators.required],
                description: [this.task.description, Validators.required],
                color: [this.task.color || '#ffffff', Validators.required],
                status: [this.task.status],
                timestamp: [this.task.timestamp]
            },
            { updateOn: 'blur' }
        )
    }
    close(task?: Task) {
        this.dialogRef.close(task)
    }
    save() {
        this._formService.markFormGroupTouched(this.form)
        if (this.form.valid) {
            if (!this.task.id) {
                this.form.value.status = this.column
                this._kanbanService.saveNewTaskInKanban(this.kanbanId, this.form.value).subscribe((response: Task) => {
                    this.close(response)
                })
            } else {
                this.form.value.id = this.task.id
                this._taskService.update(this.form.value).subscribe((response: Task) => {
                    this.close(this.form.value)
                })
            }
        }
    }
}

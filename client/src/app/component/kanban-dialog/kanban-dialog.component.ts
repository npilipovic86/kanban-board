import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Kanban } from 'src/app/model/kanban'
import { KanbanService } from 'src/app/service/kanban.service'

@Component({
    selector: 'app-kanban-dialog',
    templateUrl: './kanban-dialog.component.html',
    styleUrls: ['./kanban-dialog.component.scss']
})
export class KanbanDialogComponent implements OnInit {
    title: string
    dialogTitle: string
    form: FormGroup
    kanban: Kanban
    showDeleteButton: boolean

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<KanbanDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private _service: KanbanService
    ) {
        this.dialogTitle = data.title
        this.kanban = data.kanban
        this.showDeleteButton = false
    }

    ngOnInit() {
        this.form = this.fb.group({
            id: [this.kanban.id],
            title: [this.kanban.title, Validators.required],
            timestamp: [this.kanban.timestamp]
        })
        this.dialogTitle === 'Update Kanban' ? (this.showDeleteButton = true) : (this.showDeleteButton = false)
    }

    close(kanban?: Kanban) {
        this.dialogRef.close(kanban)
    }



    save() {
        if (this.form.valid) {
            if (!this.kanban.id) {
                this._service.create(this.form.value.title).subscribe((result: Kanban) => {
                    this.close(result)
                })
            } else {
                this._service.update(this.form.value).subscribe((response: Kanban) => {
                    this.close(this.form.value)
                })
            }
        }
    }
}

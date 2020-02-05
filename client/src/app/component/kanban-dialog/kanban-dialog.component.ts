import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { KanbanService } from 'src/app/service/kanban.service'

@Component({
    selector: 'app-kanban-dialog',
    templateUrl: './kanban-dialog.component.html',
    styleUrls: ['./kanban-dialog.component.scss']
})
export class KanbanDialogComponent implements OnInit {
    title: string
    form: FormGroup

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<KanbanDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private _service: KanbanService
    ) {
        this.form = fb.group({
            title: [this.title, Validators.required]
        })
    }

    ngOnInit() {}

    close() {
        this.dialogRef.close()
    }

    save() {
        this.title = this.form.get('title').value
        if (this.title) {
            this._service.create(this.title).subscribe((response) => {
                this.dialogRef.close(response)
            })
        }
    }
}

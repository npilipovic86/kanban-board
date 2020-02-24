import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Board } from 'src/app/model/board'
import { BoardService } from 'src/app/service/board.service'

@Component({
    selector: 'app-kanban-dialog',
    templateUrl: './kanban-dialog.component.html',
    styleUrls: ['./kanban-dialog.component.scss']
})
export class KanbanDialogComponent implements OnInit {
    title: string
    dialogTitle: string
    form: FormGroup
    boardId: string

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<KanbanDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private _service: BoardService
    ) {
        this.dialogTitle = data.dialogTitle
        this.boardId = data.boardId
    }

    ngOnInit() {
        this.form = this.fb.group({
            title: ['', Validators.required]
        })
    }

    close(kanban?: Board) {
        this.dialogRef.close(kanban)
    }

    save() {
        if (this.form.valid) {
            this._service.saveNewList(this.boardId, this.form.value).subscribe((result: any) => {
                this.close(result)
            })
        }
    }
}

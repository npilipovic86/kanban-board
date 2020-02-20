import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Board } from 'src/app/model/board'
import { BoardService } from 'src/app/service/board.service'

'@angular/forms'

@Component({
    selector: 'app-board-dialog',
    templateUrl: './board-dialog.component.html',
    styleUrls: ['./board-dialog.component.scss']
})
export class BoardDialogComponent implements OnInit {
    title: string
    dialogTitle: string
    form: FormGroup
    board: Board
    showDeleteButton: boolean

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<BoardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private _service: BoardService
    ) {
        this.dialogTitle = data.title
        console.log('TCL: BoardDialogComponent -> data', data)
        this.board = data.kanban
        this.showDeleteButton = false
    }

    ngOnInit() {
        this.form = this.fb.group({
            id: [this.board.id],
            title: [this.board.title, Validators.required],
            timestamp: [this.board.timestamp]
        })
        this.dialogTitle === 'Update Kanban' ? (this.showDeleteButton = true) : (this.showDeleteButton = false)
    }

    close(item?: Board) {
        this.dialogRef.close(item)
    }

    save() {
        if (this.form.valid) {
            if (!this.board.id) {
                this._service.create(this.form.value.title).subscribe((result: Board) => {
                    this.close(result)
                })
            } else {
                this._service.update(this.form.value).subscribe((response: Board) => {
                    this.close(this.form.value)
                })
            }
        }
    }
}

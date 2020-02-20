import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { Board } from 'src/app/model/board'
import { BoardService } from 'src/app/service/board.service'
import { BoardDialogComponent } from '../board-dialog/board-dialog.component'
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    private boards: Board[]

    constructor(private _service: BoardService, private dialog: MatDialog) {
        this.boards = []
    }

    ngOnInit() {
        this.getData()
    }
    confirm(): any {
        return this.dialog.open(ConfirmationDialogComponent, {
            width: '350px',
            data: 'Do you want to delete this item?'
        })
    }
    delete(id): void {
        console.log(id)
        event.cancelBubble = true
        if (event.stopPropagation) event.stopPropagation()
        this.confirm()
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this._service.delete(id).subscribe(() => this.getData())
                }
            })
    }
    openDialogForEdit(kanban: Board) {
        event.cancelBubble = true
        if (event.stopPropagation) event.stopPropagation()
        this.openDialog('Update Board', kanban)
    }
    openDialogForNew(): void {
        this.openDialog('Create new Board', new Board())
    }
    openDialog(title: string, kanban: Board): void {
        const dialogConfig = new MatDialogConfig()
        dialogConfig.autoFocus = true
        dialogConfig.data = {
            title: title,
            kanban: kanban
        }
        this.dialog
            .open(BoardDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    let res = this.boards.find((e) => e.id === result.id)
                    if (!res) {
                        this.boards.push(result)
                    } else {
                        let index = this.boards.findIndex((e) => e.id === result.id)
                        this.boards[index] = result
                    }
                } else {
                    this.getData()
                }
            })
    }
    getData(): void {
        this._service.getAll().subscribe((res: Board[]) => {
            this.boards = res
        })
    }
}

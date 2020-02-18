import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { Kanban } from 'src/app/model/kanban'
import { KanbanService } from 'src/app/service/kanban.service'
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'
import { KanbanDialogComponent } from '../kanban-dialog/kanban-dialog.component'

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    private boards: Kanban[]

    constructor(private _service: KanbanService, private dialog: MatDialog) {
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
    openDialogForEdit(kanban: Kanban) {
        event.cancelBubble = true
        if (event.stopPropagation) event.stopPropagation()
        this.openDialog('Update Kanban', kanban)
    }
    openDialogForNew(): void {
        this.openDialog('Create new Kanban', new Kanban())
    }
    openDialog(title: string, kanban: Kanban): void {
        const dialogConfig = new MatDialogConfig()
        dialogConfig.autoFocus = true
        dialogConfig.data = {
            title: title,
            kanban: kanban
        }
        this.dialog
            .open(KanbanDialogComponent, dialogConfig)
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
        this._service.getAll().subscribe((res: Kanban[]) => {
            this.boards = res
        })
    }
}

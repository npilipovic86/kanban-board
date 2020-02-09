import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { Kanban } from 'src/app/model/kanban'
import { KanbanService } from 'src/app/service/kanban.service'
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
    fixTimestamp(timestamp: string): string {
        const time = new Date(timestamp)
        time.setUTCHours(time.getUTCHours() + 1)
        return time
            .toUTCString()
            .split(' ')
            .slice(0, 5)
            .join(' ')
            .toString()
    }
    openDialogForEdit(kanban: Kanban) {
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

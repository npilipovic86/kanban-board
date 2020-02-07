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
    openDialogForNewKanban(): void {
        const dialogConfig = new MatDialogConfig<Kanban>()
        dialogConfig.autoFocus = true
        this.dialog
            .open(KanbanDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe((res) => {
                if (res) this.boards.push(res)
            })
    }
    getData(): void {
        this._service.getAll().subscribe((res: Kanban[]) => {
            this.boards = res
        })
    }
}

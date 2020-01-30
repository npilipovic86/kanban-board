import { Component, OnInit } from '@angular/core'
import { Kanban } from 'src/app/model/kanban'

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    private boards: Kanban[]
    constructor() {
        this.boards = [
            { id: 'dasd', title: 'board1', tasks: [] },
            { id: 'dasdsd', title: 'board2', tasks: [] },
            { id: 'dasdds', title: 'board3', tasks: [] }
        ]
    }

    ngOnInit() {}
}

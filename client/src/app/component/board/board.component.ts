import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Board } from 'src/app/model/board'

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
    @Input() item
    @Output() delete: EventEmitter<string> = new EventEmitter()
    @Output() edit: EventEmitter<Board> = new EventEmitter()

    constructor() {}

    ngOnInit() {}

    remove() {
        this.delete.emit(this.item.id)
    }

    openDialogForEdit() {
        this.edit.emit(this.item)
    }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Task } from 'src/app/model/task'

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    @Input() task: Task
    @Output() delete: EventEmitter<string> = new EventEmitter()
    @Output() edit:EventEmitter<Task> = new EventEmitter()
    constructor() {}

    ngOnInit() {}
    remove(): void {
        this.delete.emit(this.task.id)
    }
    openDialogForEdit(): void {
      this.edit.emit(this.task)
    }
}

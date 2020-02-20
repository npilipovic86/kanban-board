import { DragDropModule } from '@angular/cdk/drag-drop'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatTooltipModule } from '@angular/material/tooltip'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BoardDialogComponent } from './component/board-dialog/board-dialog.component'
import { BoardViewComponent } from './component/board-view/board-view.component'
import { BoardComponent } from './component/board/board.component'
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component'
import { KanbanDialogComponent } from './component/kanban-dialog/kanban-dialog.component'
import { MainComponent } from './component/main/main.component'
import { TaskDialogComponent } from './component/task-dialog/task-dialog.component'
import { TaskComponent } from './component/task/task.component'
import { BoardService } from './service/board.service'
import { TaskService } from './service/task.service'

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        KanbanDialogComponent,
        TaskDialogComponent,
        TaskComponent,
        ConfirmationDialogComponent,
        BoardComponent,
        BoardDialogComponent,
        BoardViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatListModule,
        DragDropModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatIconModule,
        MatTooltipModule
    ],
    providers: [BoardService, TaskService],
    bootstrap: [AppComponent],
    entryComponents: [KanbanDialogComponent, TaskDialogComponent, ConfirmationDialogComponent, BoardDialogComponent]
})
export class AppModule {}

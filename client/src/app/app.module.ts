import { DragDropModule } from '@angular/cdk/drag-drop'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { KanbanDialogComponent } from './component/kanban-dialog/kanban-dialog.component'
import { KanbanComponent } from './component/kanban/kanban.component'
import { MainComponent } from './component/main/main.component'
import { TaskDialogComponent } from './component/task-dialog/task-dialog.component'
import { KanbanService } from './service/kanban.service'
import { TaskService } from './service/task.service';
import { TaskComponent } from './component/task/task.component'

@NgModule({
    declarations: [AppComponent, KanbanComponent, MainComponent, KanbanDialogComponent, TaskDialogComponent, TaskComponent],
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
        MatIconModule
    ],
    providers: [KanbanService, TaskService],
    bootstrap: [AppComponent],
    entryComponents: [KanbanDialogComponent, TaskDialogComponent]
})
export class AppModule {}

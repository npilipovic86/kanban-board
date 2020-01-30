import { NgModule } from '@angular/core'
import { MatListModule } from '@angular/material/list'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { KanbanComponent } from './component/kanban/kanban.component'
import { MainComponent } from './component/main/main.component'
import { KanbanService } from './service/kanban.service'
import { TaskService } from './service/task.service'

@NgModule({
    declarations: [AppComponent, KanbanComponent, MainComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatListModule],
    providers: [KanbanService, TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {}

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { KanbanBoardComponent } from "./components/kanban-board/kanban-board.component";

import { KanbanBoardService } from "./service/kanban-board.service";
import { NgDragDropModule } from "ng-drag-drop";



@NgModule({
  declarations: [AppComponent, KanbanBoardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgDragDropModule.forRoot(),


  ],
  providers: [KanbanBoardService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { KanbanComponent } from './component/kanban/kanban.component'
import { MainComponent } from './component/main/main.component'

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'kanbans/:id', component: KanbanComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

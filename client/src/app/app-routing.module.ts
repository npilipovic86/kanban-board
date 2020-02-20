import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BoardViewComponent } from './component/board-view/board-view.component'
import { MainComponent } from './component/main/main.component'

const routes: Routes = [
    { path: 'boards', component: MainComponent },
    { path: 'boards/:id', component: BoardViewComponent },
    { path: '**', redirectTo: 'boards' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

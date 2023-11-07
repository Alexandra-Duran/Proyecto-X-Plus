import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { IndexComponent } from './index/index.component';
// import { CreateComponent } from './create/create.component';

const routes: Routes = [
//   { path: 'ingreso', redirectTo: 'ingreso/index', pathMatch: 'full'},
//   { path: 'ingreso/index', component: IndexComponent },
//   { path: 'ingreso/create', component: CreateComponent },
//   { path: 'ingreso/edit/:idPerson', component: EditComponent } 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

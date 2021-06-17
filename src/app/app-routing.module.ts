import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BillsListComponent} from './components/bills-list/bills-list.component';
import {AddFormComponent} from './components/add-form/add-form.component';

const routes: Routes = [
  {path: 'add-form', component: AddFormComponent},
  {path: '**', component: BillsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

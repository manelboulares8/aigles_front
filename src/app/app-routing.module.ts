import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListerEmployeeComponent } from './lister-employee/lister-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lister-employee', component: ListerEmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'recherche', component: RechercheComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

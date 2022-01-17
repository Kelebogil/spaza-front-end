import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { LoginComponent } from './login/login.component';
import { AclService } from 'ng2-acl';
import { RegisterComponent } from './register/register.component';


const routes: Routes = 
[
  { path: '', redirectTo: 'members', pathMatch: 'full'},
  { path: 'members', component: TutorialsListComponent},
  { path: 'members/:id', component: TutorialDetailsComponent},
  { path: 'add', component: AddTutorialComponent},
  { path: '',component:LoginComponent},
  { path: 'login',component:LoginComponent},
  {path: '',component:RegisterComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

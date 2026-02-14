import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';


export const routes: Routes = [
    {path:'', component: Home},
    {path:'home', component: Home},
    {path:'contact', component: Contact},
    {path:'projects', component: Projects},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


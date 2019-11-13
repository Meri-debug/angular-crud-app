import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {PersonComponent} from './person/person.component';
import { NewPersonComponent } from './new-person/new-person.component';
import {EditPersonComponent} from './edit-person/edit-person.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [ {
  path: '',
  component: PeopleComponent
  },{
  path: 'people',
  component: PeopleComponent
  },{
  path: 'details/:id',
  component: PersonComponent
  },
  {
   path: 'edit/:id',
    component: EditPersonComponent
    },
  {
    path: 'new',
    component: NewPersonComponent
    },
    { path: '**', component: PageNotFoundComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

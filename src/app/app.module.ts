import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPersonComponent } from './new-person/new-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonComponent,
    NewPersonComponent,
    PersonDetailsComponent,
    EditPersonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

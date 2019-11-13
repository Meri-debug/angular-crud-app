import { Injectable } from '@angular/core';
import {Person} from './person';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people:Person[];
  constructor(private http:HttpClient) { 
    let p1= new Person(1,"Anna Tehokas", "anna@tehokas.fi");
    let p2= new Person(2,"Teemu Malli", "teemu@malli.fi");
    let p3= new Person(1,"Ilakka Innokas", "ilakka@innokas.fi");
    this.people=[p1,p2,p3];
  }

  getPerson(id:number):Observable<Person>{
    return this.http.get<Person>(`${apiUrl}/${id}`);
    }
    
  getPeople():Person[]{
    return this.people;
  }
  deletePersonRest(id:number):Observable<{}>{
    return this.http.delete(`${apiUrl}/${id}`);
    }
    
  getPeopleRest():Observable<Person[]>{
    return this.http.get<Person[]>(apiUrl)
    .pipe(catchError(this.handleError));;
  }
  addPerson(newPerson:Person):Observable<Person>{
    return this.http.post<Person>(apiUrl,newPerson,httpOptions);
  }
  updatePerson(person:Person):Observable<Person>{
    return this.http.put<Person>(`${apiUrl}/${person.id}`,person,httpOptions)
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
    `Backend returned code ${error.status}, ` +
    `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
    'Something bad happened; please try again later.');
    };
}
const apiUrl='http://localhost:3000/api/people';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  };
  
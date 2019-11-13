import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../people.service';
import {Person} from '../person';
import {Router} from '@angular/router';
@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {
  // name:string;
  // email:string;
  constructor(private ps:PeopleService, private router:Router) { }
  addPerson(name:string,email:string){
    let newperson=new Person(null, name, email);
    this.ps.addPerson(newperson).subscribe(person=>{
      console.dir(person);
      this.router.navigateByUrl("/people");
    })
  }
  ngOnInit() {
  }

}

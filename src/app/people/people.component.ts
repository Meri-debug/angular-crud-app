import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people:Person[];
  selectedPerson:Person;
  constructor(public ps:PeopleService) { 
    // let p1= new Person(1,"Anna Tehokas", "anna@tehokas.fi");
    // let p2= new Person(2,"Teemu Malli", "teemu@malli.fi");
    // this.people=[p1, p2];
    //this.people=this.ps.getPeople();
    this.update();
  }
  update(){
    this.ps.getPeopleRest().subscribe(peoplearr=>this.people=peoplearr);
    this.selectedPerson=null;
  }
  onSelect(p:Person){
    this.selectedPerson=p;
  }
  deletePerson(id:number){
    this.ps.deletePersonRest(id).subscribe(res=>{
      this.update();
    })
  }
  ngOnInit() {
  }

}

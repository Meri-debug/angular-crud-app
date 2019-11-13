import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Person} from '../person';
import {PeopleService} from '../people.service';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  @Input() person:Person;
  @Output() deleteEvent = new EventEmitter<any>();

  constructor(public ps:PeopleService) { }

  ngOnInit() {
  }
  deletePerson(id:number){
    this.ps.deletePersonRest(id).subscribe(res=>{
      this.deleteEvent.emit("deletoitu");
    })
  }
}

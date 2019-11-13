import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
id:number;
person:Person;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private ps:PeopleService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params['id'];
      this.ps.getPerson(this.id).subscribe(person=>this.person=person)
    })
  }
goHome(){
  this.router.navigateByUrl("/");
}
}

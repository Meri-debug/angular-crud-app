import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Person } from '../person';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  person:Person;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,
 private ps:PeopleService   ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      let personid=params['id'];
      //using parameter information
      this.ps.getPerson(personid).subscribe((person:Person)=>
      this.person=person
      )
      })
      
  }
  update(){
      this.ps.updatePerson(this.person).subscribe(person=>{
        console.log("päivitetty:")
        console.dir(person);
        this.router.navigateByUrl("/people");
      })
  }
}

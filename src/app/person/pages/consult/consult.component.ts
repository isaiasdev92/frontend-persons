import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PeopleService } from '../../person.service';
import { PersonItem } from '../../interfaces/person.item.interface';

@Component({
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {

  persons: PersonItem[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPersons().subscribe(
      responseSuccess => {
        const data = responseSuccess.data;
        return this.persons = data;
      },
      responseError => {

        return this.persons = [];
      }
    );

  }


}

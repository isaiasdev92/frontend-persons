import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonAdd } from './interfaces/person.add.interface';
import { PersonItem } from './interfaces/person.item.interface';
import { ResponseAPI } from './interfaces/api.response.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseUrl: string = "http://localhost:5258/api/examsimoftware";
  constructor(private http: HttpClient) { }

  addPerson(peopleNew: PersonAdd): Observable<ResponseAPI<boolean>> {
    const url = `${this.baseUrl}/people`;
    return this.http.post<ResponseAPI<boolean>>(url, peopleNew );
  }

  getPersons(): Observable<ResponseAPI<PersonItem[]>> {
    const url = `${this.baseUrl}/people`;
    return this.http.get<ResponseAPI<PersonItem[]>>(url);
  }
}

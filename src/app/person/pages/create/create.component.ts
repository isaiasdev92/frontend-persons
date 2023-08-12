import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PersonAdd } from '../../interfaces/person.add.interface';
import { PeopleService } from '../../person.service';

@Component({
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent {

 peopleForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    age: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('',  [Validators.required, Validators.email]),
 });


  constructor(private toastr: ToastrService, private router: Router, private peopleService: PeopleService) {}

  onSubmit() {
    if (this.peopleForm.invalid) {
      this.toastr.error('Error', 'El formulario es incorrecto');
      return;
    }

    const peopleNew = this.getPeople;

    this.peopleService.addPerson(peopleNew).subscribe(
      responseSuccess => {
        this.toastr.success('¡Exito!', 'Persona agregada correctamente');
        return this.router.navigateByUrl('/');
      },
      responseError => {
        const message = responseError.error.errors[0];
        this.toastr.error('¡Error!', message);
        return;
      }
    );
    // this.toastr.success('¡Exito!', 'Persona agregada correctamente');
    // return this.router.navigateByUrl('/');

  }


  get getPeople(): PersonAdd {
    const peopleRequest: PersonAdd = {

    } as PersonAdd;
    const people = Object.assign(peopleRequest, this.peopleForm.value);
    return people;
  }
}

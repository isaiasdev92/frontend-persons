import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './pages/consult/consult.component';
import { CreateComponent } from './pages/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ConsultComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-center',
        preventDuplicates: true,
      }
    ), // ToastrModule added
  ]
})
export class PeopleModule { }

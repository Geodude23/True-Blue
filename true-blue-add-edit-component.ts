import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trueblue-add-edit',
  templateUrl: './trueblue-add-edit.component.html',
  styleUrls: ['./trueblue-add-edit.component.css']
})
export class TrueblueAddEditComponent {
  TrueBlueForm: FormGroup;

  constructor (
    private _TB: FormBuilder, 
    private _empService: EmployeeService, 
    private _dialogRef: MatDialogRef<TrueblueAddEditComponent>,
    @Inject (MAT_DIALOG_DATA) private data: any ) {

    this.TrueBlueForm = this._TB.group({
      firstname: '',
      lastname: '',
      products: '',
    }
    );
  }
    onFormSubmit() {
      if(this.TrueBlueForm.valid) {
        this._empService.addEmployee(this.TrueBlueForm.value).subscribe({
          next: (val: any) => {
            alert('Input Successfully created');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
          
        })
      }
  }

}

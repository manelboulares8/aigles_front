/*import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../service/employee.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  standalone: false,
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      echelon: ['', Validators.required],
      classe: ['', Validators.required],
      grade: ['', Validators.required],
      matricule: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService.ajouterEmployee(this.employeeForm.value).subscribe(
        response => {
          console.log('Employé ajouté avec succès', response);
          alert('Employé ajouté avec succès !');
          this.employeeForm.reset();
        },
        error => {
          console.error('Erreur lors de l\'ajout', error);
          alert('Erreur lors de l\'ajout de l\'employé.');
        }
      );
    }
  }


  

}*/

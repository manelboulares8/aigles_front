import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
 employeeForm: FormGroup;
 newEmployee: Employee = new Employee();

  constructor(private fb: FormBuilder, private employeeService: EmployeeService,    private router: Router,
  ) {
    this.employeeForm = this.fb.group({
      nomPrenom: ['', Validators.required],
      echelon: ['', Validators.required],
      classe: ['', Validators.required],
      grade: ['', Validators.required],
      matricule: ['', Validators.required],
      acte :['',Validators.required]
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      const employee: Employee = this.employeeForm.value;

      // Appel du service pour ajouter l'employé et générer le PDF
      this.employeeService.addEmployeeAndGenerateQRPDF(employee).subscribe({
        next: (pdfBlob) => {
          // Télécharger le PDF
          const downloadLink = document.createElement('a');
          const fileName = employee.nomPrenom.replace(" ", "_") + ".pdf"; // Nom du fichier PDF
          downloadLink.href = window.URL.createObjectURL(pdfBlob);
          downloadLink.download = fileName;
          downloadLink.click();
          this.router.navigate(['/lister-employee']);

        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de l\'employé ou de la génération du PDF :', err);
        }
      });
    } else {
      console.log("Formulaire invalide !");
    }
  }
}

  



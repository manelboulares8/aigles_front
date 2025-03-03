import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-lister-employee',
  standalone: false,
  templateUrl: './lister-employee.component.html',
  styleUrl: './lister-employee.component.css'
})
export class ListerEmployeeComponent implements OnInit {
  employees!: Employee[];
  role!: string;

  constructor(private router: Router, private employeeService :EmployeeService , private authService: AuthService) {}

  ngOnInit(): void {
    /*this.employees = this.employeeservice.listeremployee();
    this.role = this.authService.getRole(); */
    this.chargerEmployee();

  }
  chargerEmployee(){
    this.employeeService.listerEmployee().subscribe(emp => {
    console.log(emp);
    this.employees = emp;
    });
    }

  /*supprimeremployee(m: employee) {
    let conf = confirm("Vous êtes sûr ?");
    if (conf) {
      this.employeeservice.supprimeremployee(m);
      this.employees = this.employeeservice.listeremployee(); // Met à jour la liste après suppression
    }
  }*/
    supprimerEmployee(p: Employee) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf) {
        this.employeeService.supprimerEmployee(p).subscribe({
          next: () => {
            console.log("Étudiant supprimé");
            this.chargerEmployee(); // Recharge la liste des étudiants
          },
          error: (err) => {
            console.error("Erreur lors de la suppression de l'étudiant", err);
          }
        });
      }
    }

  
}

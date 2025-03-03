import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search-filter.pipe';  // ✅ Import du pipe

@Component({
  selector: 'app-recherche',
  standalone: true,  // ✅ Reste standalone
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
  imports: [FormsModule, SearchFilterPipe] // ✅ Ajoute le pipe ici
})
export class RechercheComponent implements OnInit {
  allEmployees!: Employee[];
  searchTerm!: string;
  employee!: Employee[];

  constructor(private serviceComponent: EmployeeService) {}

  ngOnInit(): void {
    this.allEmployees = this.employee;
  }

  onKeyUp(filterText: string) {
    this.employee = this.allEmployees.filter(item =>
      item.matricule!.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}

import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService  implements OnInit{
  ajouterEmployee(employee: Employee): Observable<Employee> { // ✅ Doit retourner un Observable
    return this.http.post<Employee>(this.apiUrl, employee);
  }
  private apiUrl = 'http://localhost:8090/aigles/api'; // URL du backend

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addEmployeeAndGenerateQRPDF(employee: Employee): Observable<Blob> {
    return this.http.post(`${this.apiUrl}/add-and-generate-qr-pdf`, employee, {
      responseType: 'blob' // Indique que la réponse est un fichier binaire
    });
  }

  listerEmployee():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);

  }
  supprimerEmployee(e:Employee): Observable<any> {
    // Assurez-vous que l'ID de l'étudiant est valide
    if (!e || !e.matricule) {
      console.error("Matricule de l'employee invalide");
      return new Observable(); // Retourne une Observable vide en cas d'erreur
    }
    
    const url = `${this.apiUrl}/${e.matricule}`; // Utilise l'ID de l'étudiant
    return this.http.delete(url, httpOptions); // Envoie la requête DELETE
  }
}
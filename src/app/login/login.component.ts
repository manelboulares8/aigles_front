import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  Login() {
    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    
    if (email === 'test@gmail.com' && password === '1234') {
      this.router.navigate(['/lister-employee']);
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect';
    }
  }

  get formControls() {
    return this.loginForm.controls;
  }


  // Fonction de validation du mot de passe
 /* validatePassword(): boolean {
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return false;
    }
    return true;
  }
 

  // Fonction de connexion
  onLoginSubmit(): void {
    this.router.navigate(["./lister-employee/lister-employee.component"]);
    if (this.email && this.password) {
      console.log('Connexion avec:', this.email, this.password);
      // Implémentez ici la logique pour se connecter à votre backend
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  // Fonction d'inscription
  onSignupSubmit(): void {
    if (this.validatePassword()) {
      console.log('Inscription avec:', this.email, this.password);
      // Implémentez ici la logique pour inscrire l'utilisateur dans votre backend
    }
  }*/
}

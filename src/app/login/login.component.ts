import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { ReactiveFormsModule } from '@angular/forms';  // Importer ReactiveFormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule,ReactiveFormsModule], // Ajouter CommonModule ici

})
export class LoginComponent {
  loginForm: FormGroup;
  signupForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router,private userService: UserService) {
    // Formulaire de connexion
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    // Formulaire d'inscription
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  // Fonction pour soumettre le formulaire de connexion
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

  // Fonction pour soumettre le formulaire d'inscription
  OnSignUpSubmit() {
    if (this.signupForm.valid) {
      const user: User = this.signupForm.value;
      this.userService.registerUser(user).subscribe({
        next: (response) => {
          console.log('Utilisateur inscrit avec succès:', response);
        },
        error: (err) => {
          console.error('Erreur lors de l\'inscription:', err);
        }
      });
    } else {
      console.log("Formulaire invalide !");
    }
  }
  

  get formControls() {
    return this.loginForm.controls;
  }

  get signUpControls() {
    return this.signupForm.controls;
  }
}

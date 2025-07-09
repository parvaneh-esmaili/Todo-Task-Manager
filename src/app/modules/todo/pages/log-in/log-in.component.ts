import { Component } from '@angular/core';
import { UserForLogIn } from '../../../../_models/log-in-model';
import { LogInService } from '../../../../_services/log-in.service';
import {
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  newUser: {
    identifier: string;
    password: string;
  } = {
    identifier: this.loginForm.controls['username'].value,
    password: this.loginForm.controls['password'].value,
  };

  constructor(private logInService: LogInService, private router: Router) {}

  LogIn() {
    this.logInService.getLogIn(this.newUser).subscribe((resposnse) => {
      const token = resposnse.jwt;
      this.logInService.saveToken(token);
      localStorage.setItem('userID', resposnse.user.id.toString());
      this.router.navigate(['/list']);
    });
  }
}

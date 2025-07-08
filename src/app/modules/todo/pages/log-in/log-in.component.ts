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

  newUser:  {
    identifier: string;
    password: string;
  } = {
    identifier:this.loginForm.controls['username'].value,
    password: this.loginForm.controls['password'].value
  }
      
  

  constructor(private logInService: LogInService) {}

  LogIn() {
    this.logInService.getLogIn(this.newUser).subscribe(() => {
      console.log('new user added');
    });
  }
}

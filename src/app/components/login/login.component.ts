import { Component, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModprimengModule } from '../../modprimeng.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ModprimengModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForma: FormGroup;

  constructor(private fb:FormBuilder){
    this.loginForma = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required]]
    })
  }

  get email(){
    return this.loginForma.controls['email'];
  }

  get password(){
    return this.loginForma.controls['password'];
  }

}

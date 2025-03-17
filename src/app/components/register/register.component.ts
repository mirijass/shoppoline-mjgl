import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModprimengModule } from '../../modprimeng.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ModprimengModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForma: FormGroup;
email: any;
password: any;
fullName: any;
confirmPassword: any;

  constructor(private fb:FormBuilder){
    this.registerForma = this.fb.group({
        fullName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email] ],
          password: ['', [Validators.required]],
          confirmPassword: ['', [Validators.required]]
        })
  }


  onRegister(){
    console.log(this.registerForma.value);
  }


}

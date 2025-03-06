import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModprimengModule } from '../../modprimeng.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ModprimengModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForma: FormGroup;

  constructor(private fb:FormBuilder){
    this.registerForma = this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email] ],
          password: ['', [Validators.required]]
        })
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ModprimengModule } from '../../modprimeng.module';

@Component({
  selector: 'app-navbar',
  imports: [ ModprimengModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Login',
                icon: 'pi pi-user',
                routerLink: '/login'
            },
            {
                label: 'Register',
                icon: 'pi pi-pencil',
                routerLink: '/register'
            },
        ];
    }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import {ModprimengModule} from './modprimeng.module';
import { MessageService } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { MenubarComponent } from "./components/menubar/menubar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModprimengModule, NavbarComponent, MegaMenu, MenubarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
  providers: [MessageService]
})
export class AppComponent {

  title = 'shoponline_mjgl';
  constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'El mensaje de toast MJGL', life: 3000 });
    }

    showTopLeft() {
      this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', key: 'tl', life: 3000 });
  }

  showBottomLeft() {
      this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', key: 'bl', life: 3000 });
  }
    
    showBottomRight() {
      this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', key: 'br', life: 3000 });
  }
  
  
}
 
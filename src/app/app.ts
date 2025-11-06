import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularToastifyModule, HttpClientModule],
  providers: [ToastService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-microservicios');
}

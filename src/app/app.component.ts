import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  NavComponent,ViewAllBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library-manage-front-end';
}

import { Component } from '@angular/core';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { CategoryHomeComponent } from './components/category-home/category-home.component';

@Component({
  selector: 'app-home',
  imports: [SlidebarComponent, ProductHomeComponent, CategoryHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

import { Category } from './../../core/models/iproduct.interface';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/models/icategory.interface';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  private readonly categoriesService = inject(CategoriesService);

  categories = signal<Icategory[]>([] as Icategory[]);
  selectedCategory = signal<Icategory | null>(null);
  ngOnInit(): void {
    this.getAllCat();
  }
  getAllCat() {
    this.categoriesService.getAll().subscribe({
      next: (res) => {
        this.categories.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getOneCateg(Id: string) {
    this.selectedCategory.set(null);
    this.categoriesService.getOne(Id).subscribe({
      next: (res) => {
        this.selectedCategory.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

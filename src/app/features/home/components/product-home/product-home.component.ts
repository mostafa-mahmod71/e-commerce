import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ProductsService } from '../../../../core/services/products.service';
import { Iproduct } from '../../../../core/models/iproduct.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-home',
  imports: [RouterLink],
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.css',
})
export class ProductHomeComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  starArr: number[] = [1, 2, 3, 4, 5];
  // math = Math;

  ngOnInit(): void {
    this.getAllProducts();
  }

  productList = signal<Iproduct[]>([]);
  getAllProducts() {
    this.productsService.getallproducts().subscribe({
      next: (res) => {
        this.productList.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getOneProduct(prId: string) {
    this.productsService.getoneproduct(prId).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

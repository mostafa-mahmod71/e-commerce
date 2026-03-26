import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../core/models/iproduct.interface';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly activatedRoute = inject(ActivatedRoute);
  productD = signal<Iproduct>({} as Iproduct);
  starArr: number[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.productDetails(param.get('id')!);
    });
  }
  productDetails(id: string): void {
    this.productsService.getoneproduct(id).subscribe({
      next: (res) => {
        this.productD.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

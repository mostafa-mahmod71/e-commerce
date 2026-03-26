import { RedirectCommand, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'home page',
  },
  {
    path: 'shop',
    loadComponent: () => import('./features/shop/shop.component').then((m) => m.ShopComponent),
    title: 'shop',
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./features/categories/categories.component').then((m) => m.CategoriesComponent),
    title: 'categories',
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then((m) => m.CartComponent),
    title: 'cart',
  },
  {
    path: 'brands',
    loadComponent: () =>
      import('./features/brands/brands.component').then((m) => m.BrandsComponent),
    title: 'brands',
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./features/wishlist/wishlist.component').then((m) => m.WishlistComponent),
    title: 'wish List',
  },
  {
    // path: 'details/:id/:slug',

    path: 'details',
    loadComponent: () =>
      import('./features/details/details.component').then((m) => m.DetailsComponent),
    title: 'details',
  },
  {
    path: 'chekout',
    loadComponent: () =>
      import('./features/checkout/checkout.component').then((m) => m.CheckoutComponent),
    title: 'check out',
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./features/orders/orders.component').then((m) => m.OrdersComponent),
    title: 'orders',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then((m) => m.LoginComponent),
    title: 'login',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register.component').then((m) => m.RegisterComponent),
    title: 'registeration',
  },
  {
    path: 'forgot',
    loadComponent: () =>
      import('./features/forgetpass/forgetpass.component').then((m) => m.ForgetpassComponent),
    title: 'forgot password',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/notfoundpage/notfoundpage.component').then((m) => m.NotfoundpageComponent),
    title: 'page not found',
  },
];

import { InventoriesComponent } from './inventories/inventories.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
  {path: 'inventories', component: InventoriesComponent, data: {title: 'Inventories'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

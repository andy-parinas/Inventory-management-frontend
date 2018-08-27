import { InventoryDetailComponent } from './inventories/inventory-detail/inventory-detail.component';
import { InventoryListComponent } from './inventories/inventory-list/inventory-list.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inventories', component: InventoriesComponent, children: [
    {path: '', component: InventoryListComponent},
    {path: ':id', component: InventoryDetailComponent}
  ]},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

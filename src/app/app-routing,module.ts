import { ProductInventoryListComponent } from './products/product-detail/product-inventory-list/product-inventory-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { InventoryNewComponent } from './inventories/inventory-new/inventory-new.component';
// tslint:disable-next-line:max-line-length
import { InventoryTransactionDetailComponent } from './inventories/inventory-detail/inventory-transaction-detail/inventory-transaction-detail.component';
// tslint:disable-next-line:max-line-length
import { InventoryTranctionListComponent } from './inventories/inventory-detail/inventory-transaction-list/inventory-transaction-list.component';
import { InventoryDetailComponent } from './inventories/inventory-detail/inventory-detail.component';
import { InventoryListComponent } from './inventories/inventory-list/inventory-list.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductNewComponent } from './products/product-new/product-new.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inventories', component: InventoriesComponent, children: [
      {path: '', component: InventoryListComponent},
      {path: 'new', component: InventoryNewComponent},
      {path: ':id', component: InventoryDetailComponent, children: [
          {path: '', component: InventoryTranctionListComponent},
          {path: 'transactions/:id', component: InventoryTransactionDetailComponent}
    ]}
  ]},
  {path: 'products', component: ProductsComponent, children: [
      {path: '', component: ProductListComponent},
      {path: 'new', component: ProductNewComponent},
      {path: ':id', component: ProductDetailComponent, children: [
          {path: '', component: ProductInventoryListComponent}
      ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

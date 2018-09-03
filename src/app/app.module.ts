import { InventoryNewComponent } from './inventories/inventory-new/inventory-new.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './common/navigation-header/navigation-header.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { ProductsComponent } from './products/products.component';
import { NavigationMenuComponent } from './common/navigation-header/navigation-menu/navigation-menu.component';
import { InventoryListComponent } from './inventories/inventory-list/inventory-list.component';
import { InventoryDetailComponent } from './inventories/inventory-detail/inventory-detail.component';
import { InventoryFormComponent } from './inventories/inventory-form/inventory-form.component';
import { InventoryService } from './inventories/inventory.service';
import { AppRoutingModule } from './app-routing,module';
// tslint:disable-next-line:max-line-length
import { InventoryTransactionDetailComponent } from './inventories/inventory-detail/inventory-transaction-detail/inventory-transaction-detail.component';
// tslint:disable-next-line:max-line-length
import { InventoryTransactionFormComponent } from './inventories/inventory-detail/inventory-transaction-form/inventory-transaction-form.component';
// tslint:disable-next-line:max-line-length
import { InventoryTranctionListComponent } from './inventories/inventory-detail/inventory-transaction-list/inventory-transaction-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductNewComponent } from './products/product-new/product-new.component';
import { ProductInventoryListComponent } from './products/product-detail/product-inventory-list/product-inventory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    PageHeaderComponent,
    DashboardComponent,
    InventoriesComponent,
    ProductsComponent,
    NavigationMenuComponent,
    InventoryListComponent,
    InventoryDetailComponent,
    InventoryFormComponent,
    InventoryTranctionListComponent,
    InventoryTransactionDetailComponent,
    InventoryTransactionFormComponent,
    InventoryNewComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductNewComponent,
    ProductInventoryListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

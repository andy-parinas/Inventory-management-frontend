// tslint:disable-next-line:max-line-length
import { InventoryTranctionListComponent } from './inventories/inventory-detail/inventory-transaction-list/inventory-transaction-list.component';
import { InventoryService } from './inventories/inventory.service';
import { AppRoutingModule } from './app-routing,module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './common/navigation-header/navigation-header.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { ProductsComponent } from './products/products.component';
import { NavigationMenuComponent } from './common/navigation-header/navigation-menu/navigation-menu.component';
import { InventoryListComponent } from './inventories/inventory-list/inventory-list.component';
import { InventoryDetailComponent } from './inventories/inventory-detail/inventory-detail.component';
import { InventoryListItemComponent } from './inventories/inventory-list/inventory-list-item/inventory-list-item.component';
import { InventoryFormComponent } from './inventories/inventory-form/inventory-form.component';
// tslint:disable-next-line:max-line-length
import { InventoryTransactionDetailComponent } from './inventories/inventory-detail/inventory-transaction-detail/inventory-transaction-detail.component';

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
    InventoryListItemComponent,
    InventoryFormComponent,
    InventoryTranctionListComponent,
    InventoryTransactionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

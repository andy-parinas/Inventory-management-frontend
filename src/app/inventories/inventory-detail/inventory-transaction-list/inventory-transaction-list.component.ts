import { InventoryTransactionService } from './../inventory-transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './inventory-transaction-list.component.html',
  providers: [InventoryTransactionService]
})
export class InventoryTranctionListComponent implements OnInit {

    transactions: any[];

    constructor(private transactionService: InventoryTransactionService) { }

    ngOnInit() {
        this.transactions = this.transactionService.getTransactions();
    }

}


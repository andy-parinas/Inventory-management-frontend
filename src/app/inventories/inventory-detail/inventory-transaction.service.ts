

export class InventoryTransactionService {

    private transactions = [
      {id: 1, date: '28/08/20178', transaction: 'Add inventory', quantity: 100},
      {id: 2, date: '28/08/20178', transaction: 'Add inventory', quantity: 100},
      {id: 3, date: '28/08/20178', transaction: 'Add inventory', quantity: 100},
      {id: 4, date: '28/08/20178', transaction: 'Add inventory', quantity: 100},
      {id: 5, date: '28/08/20178', transaction: 'Add inventory', quantity: 100},
      {id: 6, date: '28/08/20178', transaction: 'Add inventory', quantity: 100},
      {id: 7, date: '28/08/20178', transaction: 'Add inventory', quantity: 100},
      {id: 8, date: '28/08/20178', transaction: 'Add inventory', quantity: 100},
      {id: 9, date: '28/08/20178', transaction: 'Add inventory', quantity: 100},
      {id: 10, date: '28/08/20178', transaction: 'Add inventory', quantity: 100}
    ];

    constructor() {}

    getTransactions() {
      return this.transactions.slice();
    }
}

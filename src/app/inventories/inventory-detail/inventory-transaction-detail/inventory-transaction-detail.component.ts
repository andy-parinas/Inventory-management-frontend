import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './inventory-transaction-detail.component.html'
})
export class InventoryTransactionDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {

  }

  onBackToList() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}

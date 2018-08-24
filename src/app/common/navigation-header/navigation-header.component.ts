import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  @Input() brandTitle: string;

  constructor() { }

  ngOnInit() {
  }

}

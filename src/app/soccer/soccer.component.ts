import { Component, OnInit, Type } from '@angular/core';

import { ItemService } from "../item/item.service";
import { Router } from '@angular/router';
import { Item, Types } from '../item/item'

@Component({
  selector: 'ns-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {

  type : "Soccer";

  items: Array<Item>;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.itemService.getSoccer();
    // this.items = this.itemService.getSoccerType(this.type);

  }
}

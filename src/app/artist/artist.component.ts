import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemService } from "../item/item.service";
import { Item,Types } from "../item/item";
import { Router } from '@angular/router';

@Component({
  selector: 'ns-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  type : Types.ARTIST;
  items: Array<Item>;
  item: Item;

  constructor(private itemService: ItemService, private router  : Router ) { }

  ngOnInit(): void {
    // this.type = ARTIST;
      this.items = this.itemService.getArtist();
  }

  goHome(){
    this.router.navigateByUrl('/');
  }
}

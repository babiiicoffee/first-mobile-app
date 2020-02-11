import { Component, OnInit, Input } from "@angular/core";

import { Item, Types } from "./item";
import { ItemService } from "./item.service";
import { Router } from '@angular/router';

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    type : Types.SOCCER;
    @Input() items: Array<Item>;
    // public showForm = true;
    

    constructor(private itemService: ItemService, private router  : Router ) { }

    ngOnInit(): void {
        // this.items = this.itemService.getItems();
        // this.items = this.itemService.getSoccer();
    }

    onTap() {
        this.router.navigateByUrl('/form');        
    }
    
    onAddPersonEvent(data: Item){
        data.id = this.itemService.getItems().length + 3;
        // alert(data.name)
        console.log(data)
        this.items.push(data)
        this.itemService.addPerson(data)
    }
}

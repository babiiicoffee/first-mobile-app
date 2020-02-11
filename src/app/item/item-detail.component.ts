import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

// import Swal from 'sweetalert2'

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    // public counter: number = 0;
    // public score: number = 0;
    public show: boolean = false;
    public editPersonData: any[];

    

    @Input() fullnameID: string;
    @Input() roleID: string;
    @Input() scoreID: number;

    @Input() editDatas: boolean;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }

    onTap() {
        alert(`ID : ${this.item.id} \nName : ${this.item.name} \nRole : ${this.item.role} \nScore : ${this.item.score}`)
    }

    addScore() {
        this.item.score++;
        this.show = true
    }

    deductScore() {
        this.item.score -= 1;
        if (this.item.score === 0) {
            this.show = false;
        }
    }

    editData(data){
        this.item.name = data.name;
        this.item.role = data.role;
        this.item.score = data.score;
    }
}

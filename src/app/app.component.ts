import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})

export class AppComponent {

    constructor( private router: Router
    ) { }

    ngOnInit() {
    }

    toSoccer() {
        this.router.navigateByUrl('/soccer');
    }

    toArtist() {
        this.router.navigateByUrl('/artist');
    }
    toDraggable(){
        this.router.navigateByUrl('/draggable');
    }
}

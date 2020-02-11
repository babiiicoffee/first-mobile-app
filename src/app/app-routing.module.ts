import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { GridsComponent } from "./grids/grids.component";
import { FormComponent } from "./form/form.component";
import { ArtistComponent } from "./artist/artist.component";
import { AppComponent } from "./app.component";
import { DraggableComponent } from './draggable/draggable.component';
import {SoccerComponent} from './soccer/soccer.component'

const routes: Routes = [
    // { path: "", component: AppComponent, pathMatch: "full" },
    { path: "", redirectTo: "/artist", pathMatch: "full" },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "grids", component: GridsComponent },
    { path: "form", component: FormComponent },
    { path: "artist", component: ArtistComponent},
    { path: "draggable", component: DraggableComponent},
    {path: "soccer", component: SoccerComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule { }

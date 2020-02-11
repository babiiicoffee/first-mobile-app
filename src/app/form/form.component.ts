import { Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';
import { Item} from "../item/item";
import { Router } from '@angular/router';

@Component({
  selector: 'ns-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public item: Item;
  @Input() name: string;
  @Input() role: string;
  @Input() score: number;
  // public id = 35;

  public editData: boolean = false;
  public editDataByID: Item;

  public editName: string;
  public editRole: string;
  public editScore: number;

  @Output() addpersonevent = new EventEmitter;

  constructor(private router: Router) { }

  ngOnInit() { }

  onSubmit() {

    // this.id = this.id + 1;
    this.item = {
      // plus 1 kay ang length na iyang basahon kay ang daan nya dili ag updated then 2 kay
      // arun mu lapas siya ug 1 sa current na ID number
      // id: this.itemService.getItems().length + 3,
      name: this.name,
      role: this.role,
      score: this.score,
      // type: Types.SOCCER
    } as Item;
    
    this.addpersonevent.emit(this.item)
    // alert(this.itemService.getItems().length)
  }

  backBtn() {
    this.router.navigateByUrl('/items');
  }

}


      //  id : this.apiDataList[this.apiDataList.length -1].id +1,
      // id: this.item[this.itemService.getItems().length -1].id + 1,
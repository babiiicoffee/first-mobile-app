import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PanGestureEventData } from "@nativescript/core/ui/gestures/gestures";
import { Image } from '@nativescript/core/ui/image';

@Component({
  selector: 'ns-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements OnInit {

  @ViewChild("dragImage", { static: false }) dragImage: ElementRef;

  dragImageItem: Image;
  prevDeltaX: number;
  prevDeltaY: number;

  constructor() { }

  public ngOnInit() {
    this.dragImageItem = <Image>this.dragImage.nativeElement;
    this.dragImageItem.translateX = 0;
    this.dragImageItem.translateY = 0;
    this.dragImageItem.scaleX = 1;
    this.dragImageItem.scaleY = 1
  }

  onPan(args: PanGestureEventData) {
    if (args.state === 1) // down
    {
      this.prevDeltaX = 0;
      this.prevDeltaY = 0;
    }
    else if (args.state === 2) // panning
    {
      this.dragImageItem.translateX += args.deltaX - this.prevDeltaX;
      this.dragImageItem.translateY += args.deltaY - this.prevDeltaY;

      this.prevDeltaX = args.deltaX;
      this.prevDeltaY = args.deltaY;
    }
    else if (args.state === 3) // up
    {

    }
  }

}

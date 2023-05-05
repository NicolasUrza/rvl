import { AfterViewInit, Component, ComponentRef, Input, QueryList, ViewChildren } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { CdkDragDrop, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements AfterViewInit{
  @Input() imgsource: string
  @Input() name: string
  mouse_down = false;
  mouse_up = false;
  isDestroyed = false;
  isOnWorkspace = true;
  @Input() x="0";
  @Input() y="0";
  workspace = document.getElementById("workspace_container")

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
  ) {

  }
  ngAfterViewInit(): void {
    // mover el item hasta x e y
    let element = document.getElementById(this.name);
    console.log(this.x)
    element.style.left = this.x;
    element.style.top = this.y;
  }

  drop(event: CdkDragEnd<string[]>) {
    if (this.EstaDentroDelWorspace()) {
      this.isOnWorkspace = true;
      event.source.boundaryElement = this.workspace;
    }
    else {
      this.isDestroyed = true;
    }
  }

  EstaDentroDelWorspace() {
    let element = document.getElementById(this.name);
    if (element.getBoundingClientRect().right < this.workspace.getBoundingClientRect().right && element.getBoundingClientRect().left > this.workspace.getBoundingClientRect().left) {
      if (element.getBoundingClientRect().bottom < this.workspace.getBoundingClientRect().bottom && element.getBoundingClientRect().top > this.workspace.getBoundingClientRect().top) {
        return true;
      }
    }
    return false
  }

  mouseDown() {
    this.mouse_down = true;
    this.mouse_up = false;

  };


  mouseUp() {
    this.mouse_down = false;
    this.mouse_up = true;

  }


}

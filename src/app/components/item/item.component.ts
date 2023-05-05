import { AfterViewInit, Component, ComponentRef, Input, QueryList, ViewChildren } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { CdkDragDrop, CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() imgsource: string
  @Input() name: string
  mouse_down = false;
  mouse_up = false;
  isDestroyed = false;
  isOnWorkspace = true;

  workspace = document.getElementById("workspace_container")
  canvasAsigned = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
  ) {

  }


  drop(event: CdkDragEnd<string[]>) {
    let element = document.getElementById("canvas_message");
    //le quito las clases que tiene y le agrego canvas__message

    element.classList.add("canvas__message--hidden");
    element.classList.add("canvas__message");
    let item = document.getElementById(this.name);
    item.classList.remove("canvas__box--dragging")
    item.classList.add("canvas__box")
    if (this.EstaDentroDelWorspace()) {

      this.isOnWorkspace = true;
      event.source.boundaryElement = this.workspace;
      this.canvasAsigned = true;
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

  Move(event: CdkDragMove<string[]>) {
    if (!this.canvasAsigned) {
      let element = document.getElementById("canvas_message");
      //le quito las clases que tiene y le agrego canvas__message
      element.classList.remove("canvas__message--hidden");
      element.classList.add("canvas__message");

    }
  }

  Start(event: CdkDragStart) {
    if (!this.canvasAsigned) {
      let item = document.getElementById(this.name);
      item.classList.remove("canvas__box")
      item.classList.add("canvas__box--dragging")
    }
  }

  mouseDown() {
    this.mouse_down = true;
    this.mouse_up = false;

  };


  mouseUp() {
    this.mouse_down = false;
    this.mouse_up = true;

  }
  onRightClick(event:MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    let menu = document.getElementById("menu"+this.name);
    menu.classList.remove("canvas__menu--hidden");
    menu.classList.add("canvas__menu--visible");

  }

}

import { AfterViewInit, Component, ComponentRef, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { CdkDrag, CdkDragDrop, CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { TopologyObject } from 'src/app/interfaces/topology-object';
import { TopologyController } from 'src/app/controllers/TopologyController';
import { last } from 'rxjs';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements AfterViewInit {
  @Input() topology: TopologyObject;
  mouse_down = false;
  mouse_up = false;
  isDestroyed = false;
  isOnWorkspace = true;
  controller: TopologyController;
  showMenu = true;
  showConnection = false;
  workspace = document.getElementById("workspace_container")
  canvasAsigned = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
  ) {

  }



  ngAfterViewInit(): void {
    let body = document.getElementById("body");
  }

  ShowConnections(): void {
    this.showMenu = false;
    this.showConnection = true;
  }

  drop(event: CdkDragEnd<string[]>) {
    this.controller.UpdateCanvas(this.topology.name);

    let item = document.getElementById(this.topology.name);
    item.classList.remove("canvas__box--dragging")
    item.classList.add("canvas__box")


  }


  isConnected: boolean = false;
  moveCounter: number = 0;
  Move(event: CdkDragMove<string[]>) {
    if (this.moveCounter % 7 == 0) {
      this.controller.UpdateCanvas(this.topology.name);
    }
    this.moveCounter++;

  }

  Start(event: CdkDragStart) {

    let item = document.getElementById(this.topology.name);
    item.classList.remove("canvas__box")
    item.classList.add("canvas__box--dragging")
    let drag: CdkDrag = event.source._dragRef.data;
    let body = document.getElementById("body");
    drag.boundaryElement = body;
  }

  ConnectionMode() {
    let contrMode = this.controller.connectionMode
    let lastConnection = this.controller.lastConnection
    if (contrMode && !lastConnection.contains(this.topology.name) && !this.showConnectionButton) {
      return true
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
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    let menu = document.getElementById("menu" + this.topology.name);
    menu.classList.remove("canvas__menu--hidden");
    menu.classList.add("canvas__menu--visible");

  }
  showConnectionButton = false;


  ShowConnectionButton() {
    if (this.controller.connectionMode) {
      this.showConnectionButton = true
    }
  }
  CreateConnection() {

    if (this.controller.connectionMode) {
      this.controller.CreateConnection(this.topology.name);
    }
    this.showConnectionButton = false

  }
  // event listener que cuando clickeo en cualquier lado uqe no este dentro del menu me ponga hiden el canvas__menu
  // y que cuando clickeo en el menu me ponga visible el canvas__menu
  // y que cuando clickeo en el menu y luego en cualquier lado que no sea el menu me ponga hidden el canvas__menu

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    let menu = document.getElementById("menu" + this.topology.name);
    // si la posicion x e y del mouse no esta dentro del menu
    let menuLeft = menu.getBoundingClientRect().left;
    let menuRight = menu.getBoundingClientRect().right;
    let menuTop = menu.getBoundingClientRect().top;
    let menuBottom = menu.getBoundingClientRect().bottom;
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    if (mouseX < menuLeft || mouseX > menuRight || mouseY < menuTop || mouseY > menuBottom) {
      this.DeactivateMenu();
    }

  }

  DeactivateMenu(timeout = 349) {
    let menu = document.getElementById("menu" + this.topology.name);
    //set timeout para que no se active el menu cuando se clickea en el menu
    setTimeout(() => {

      if (!menu.classList.contains("canvas__menu--hidden")) {
        menu.classList.remove("canvas__menu--visible");
        menu.classList.add("canvas__menu--hidden");
      }
    }, timeout);
    this.showMenu = true;
    this.showConnection = false;
  }

  CreateList(n: number) {
    //crear una lista que contenga hasta el numero de puertos que tiene el objeto
    let list = [];
    for (let i = 0; i < n; i++) {
      if (!this.connections.includes(i)) {
        list.push(i);
      }
    }
    return list;
  }
  connections: number[] = [];
  EnableConnection(i: number) {
    this.connections.push(i);
    this.controller.CreateOverlay(this.topology.name);
    this.DeactivateMenu(0);
  }
}

import { AfterViewInit, Component, ComponentRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { CdkDragDrop, CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { TopologyObject } from 'src/app/interfaces/topology-object';
import { TopologyController } from 'src/app/controllers/TopologyController';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit{
  @Input() topology: TopologyObject;
  mouse_down = false;
  mouse_up = false;
  isDestroyed = false;
  isOnWorkspace = true;
  controller: TopologyController;

  workspace = document.getElementById("workspace_container")
  canvasAsigned = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
  ) {

  }
  ngOnInit(): void {
  }


  drop(event: CdkDragEnd<string[]>) {
    if(!this.canvasAsigned){
    
    let item = document.getElementById(this.topology.name);
    item.classList.remove("canvas__box--dragging")
    item.classList.add("canvas__box")
    if (this.EstaDentroDelWorspace()) {

      this.isOnWorkspace = true;
      event.source.boundaryElement = this.workspace;
      this.canvasAsigned = true;
    }
    else {
      this.isDestroyed = true;
    }}
  }

  EstaDentroDelWorspace() {
    let element = document.getElementById(this.topology.name);
    if (element.getBoundingClientRect().right < this.workspace.getBoundingClientRect().right && element.getBoundingClientRect().left > this.workspace.getBoundingClientRect().left) {
      if (element.getBoundingClientRect().bottom < this.workspace.getBoundingClientRect().bottom && element.getBoundingClientRect().top > this.workspace.getBoundingClientRect().top) {
        return true;
      }
    }
    return false
  }
  isConnected: boolean = false;
  Move(event: CdkDragMove<string[]>) {
    if(this.isConnected){
      this.controller.CreateConnection("0","1");}
  }

  Start(event: CdkDragStart) {
    if (!this.canvasAsigned) {
      let item = document.getElementById(this.topology.name);
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
    let menu = document.getElementById("menu"+this.topology.name);
    menu.classList.remove("canvas__menu--hidden");
    menu.classList.add("canvas__menu--visible");

  }
  CreateConnection(){
    this.controller.CreateConnection("", "");
    this.DeactivateMenu();
  }
  // event listener que cuando clickeo en cualquier lado uqe no este dentro del menu me ponga hiden el canvas__menu
  // y que cuando clickeo en el menu me ponga visible el canvas__menu
  // y que cuando clickeo en el menu y luego en cualquier lado que no sea el menu me ponga hidden el canvas__menu
  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent){
      let menu = document.getElementById("menu"+this.topology.name);
      // si el mouse no esta dentro del menu
      if(!menu.contains(<Node>event.target)){
        this.DeactivateMenu();
      }
    
  }

  DeactivateMenu(){
    let menu = document.getElementById("menu"+this.topology.name);
    //set timeout para que no se active el menu cuando se clickea en el menu
    setTimeout(() => {

    if(!menu.classList.contains("canvas__menu--hidden")){
      menu.classList.remove("canvas__menu--visible");
      menu.classList.add("canvas__menu--hidden");
    }
  }, 349);
  }
}

import { Component, ViewContainerRef , ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CountTopology } from 'src/app/Entities/countTopology';
import { TopologyObjectBuilder } from 'src/app/Entities/TopologyObject';
import { TopologyController } from 'src/app/controllers/TopologyController';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent {
  objetosActivo = true;
  FiguresActive = false;
  DevicesActive = false;
  ConnectionsActive = false;
  minimize = false;
  moving = false;
  maximize = false;
  @Input() controller: TopologyController;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  FiguresClick() {
    // se muestra o se oculta la descripcion
    this.FiguresActive = !this.FiguresActive;
    this.DevicesActive = false;
    this.ConnectionsActive = false;
    this.CloseInactiveMenus();
  }
  DevicesClick() {
    // se muestra o se oculta la descripcion
    this.DevicesActive = !this.DevicesActive;
    this.FiguresActive = false;
    this.ConnectionsActive = false;
    this.CloseInactiveMenus();
    
  }
  ConnectionsClick() {
    // se muestra o se oculta la descripcion
    this.ConnectionsActive = !this.ConnectionsActive;
    this.DevicesActive = false;
    this.FiguresActive = false;
    this.CloseInactiveMenus();
  }
  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;

  CreateItem(imgSource:string, name:string, event:MouseEvent){
    this.controller.CreateItem(imgSource, name, event);

  
  }

  CloseInactiveMenus(){
    if (!this.ConnectionsActive) {
      //si se oculta la descripcion se espera 300ms y se pone la altura a 0
      setTimeout(() => {
        let element = document.getElementById("connections_box");
        element.style.height = "0";
      }, 300);
    }
    else {
      let element = document.getElementById("connections_box");
      element.style.height = "auto";
    }

    if (!this.DevicesActive) {
      //si se oculta la descripcion se espera 300ms y se pone la altura a 0
      setTimeout(() => {
        let element = document.getElementById("devices_box");
        element.style.height = "0";
      }, 300);
    }
    else {
      let element = document.getElementById("devices_box");
      element.style.height = "auto";
    }
    if (!this.FiguresActive) {
      //si se oculta la descripcion se espera 300ms y se pone la altura a 0
      setTimeout(() => {
        let element = document.getElementById("figures_box");
        element.style.height = "0";
      }, 300);
    }
    else {
      let element = document.getElementById("figures_box");
      element.style.height = "auto";
    }
  }


}

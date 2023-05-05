import { Component, ViewContainerRef , ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CountTopology } from 'src/app/Entities/countTopology';

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
  imgSource:string;
  showItem = false;
  numberOfCreations = new CountTopology();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  FiguresClick() {
    // se muestra o se oculta la descripcion
    this.FiguresActive = !this.FiguresActive;
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
  DevicesClick() {
    // se muestra o se oculta la descripcion
    this.DevicesActive = !this.DevicesActive;
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
  }
  ConnectionsClick() {
    // se muestra o se oculta la descripcion
    this.ConnectionsActive = !this.ConnectionsActive;
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
  }
  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;

  CreateItem(imgSource:string, name:string, event:MouseEvent){
    this.numberOfCreations.Count(name);
    const factory = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
    const componentRef = this.componentContainer.createComponent(factory);
    componentRef.instance.imgsource = imgSource;
    componentRef.instance.name = name + this.numberOfCreations.GetCount(name).toString();
    this.componentContainer.insert(componentRef.hostView);
  
  }


}

import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { CountTopology } from './Entities/countTopology';
import { ItemComponent } from './components/item/item.component';
import { TopologyObjectBuilder } from './Entities/TopologyObject';
import { TopologyController } from './controllers/TopologyController';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rvl';
  numberOfCreations = new CountTopology();
  controller = new TopologyController(this);
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;

  CreateItem(imgSource:string, name:string, event:MouseEvent){
    this.numberOfCreations.Count(name);
    const factory = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
    const componentRef = this.componentContainer.createComponent(factory);
    componentRef.instance.topology = new TopologyObjectBuilder().build(name + this.numberOfCreations.GetCount(name).toString(), imgSource);
    this.componentContainer.insert(componentRef.hostView);
  
  }
}

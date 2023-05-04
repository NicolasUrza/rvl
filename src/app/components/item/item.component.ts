import { Component, Input } from '@angular/core';
import { ViewContainerRef , ComponentFactoryResolver, ViewChild } from '@angular/core';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() imgSource:string
  @Input() name:string
  mouse_down = false;
  mouse_up = false;
  @ViewChild(WorkspaceComponent) componentContainer: WorkspaceComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver){

  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer != event.container) {
      
    const factory = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
    const componentRef = this.componentContainer.componentContainer.createComponent(factory);
    componentRef.instance.imgSource = this.imgSource;
    componentRef.instance.name = this.name;
    this.componentContainer.componentContainer.insert(componentRef.hostView);
    }
  }
  
  mouseDown()
 {
  

    };

 
 mouseUp()
 {
  this.mouse_down=false;
   this.mouse_up =true;

 }
}

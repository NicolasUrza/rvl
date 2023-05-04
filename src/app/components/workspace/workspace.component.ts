import { Component } from '@angular/core';
import { ViewContainerRef , ComponentFactoryResolver, ViewChild } from '@angular/core';
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer: ViewContainerRef;
  componentFactoryResolver: any;
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { TopologyComponent } from './components/topology/topology.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
// drag and drop
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ItemComponent } from './components/item/item.component';
import { ObserverDirective } from './directives/observer.directive';
import { TerminalComponent } from './components/terminal/terminal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ToolbarComponent,
    PropertiesComponent,
    TopologyComponent,
    WorkspaceComponent,
    ItemComponent,
    ObserverDirective,
    TerminalComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

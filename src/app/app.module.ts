import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { TopologyComponent } from './components/topology/topology.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ToolbarComponent,
    PropertiesComponent,
    TopologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

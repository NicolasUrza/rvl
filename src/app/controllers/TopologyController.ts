import { Input } from "@angular/core";
import { TopologyObjectBuilder } from "../Entities/TopologyObject";
import { TopologyObject } from "../interfaces/topology-object";
import { AppComponent } from "../app.component";

export class TopologyController {
    activeTopologyObjects : TopologyObject[];
    appC: AppComponent;
    constructor(appComponent:AppComponent) {
        this.appC = appComponent;
    }
    CreateItem(imgSource:string, name:string, event:MouseEvent){
        this.appC.CreateItem(imgSource, name, event);
    }
}
import { ComponentRef, Input } from "@angular/core";
import { TopologyObjectBuilder } from "../Entities/TopologyObject";
import { TopologyObject } from "../interfaces/topology-object";
import { AppComponent } from "../app.component";
import { ItemComponent } from "../components/item/item.component";
import { Connections } from "../Entities/Connections";

export class TopologyController {
    activeTopologyObjects: ItemComponent[] = [];
    appC: AppComponent;
    ids = [];
    connections: Connections[] = [];
    connectionMode = false;
    lastConnection: Connections = null;
    constructor(appComponent: AppComponent) {
        this.appC = appComponent;
    }
    CreateItem(imgSource: string, name: string, event: MouseEvent) {
        this.appC.CreateItem(imgSource, name, event);
    }
    CreateOverlay(name: string) {
        this.connectionMode = true;
        this.lastConnection = new Connections(name);
    }
    CreateConnection(name: string) {
        //this.activeTopologyObjects[0].isConnected = true;
        //this.activeTopologyObjects[1].isConnected = true;

        let element1 = document.getElementById(this.lastConnection.id1);
        const element2 = document.getElementById(name);
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        const startX = rect1.left + rect1.width / 2;
        const startY = rect1.top + rect1.height / 2;
        const endX = rect2.left + rect2.width / 2;
        const endY = rect2.top + rect2.height / 2;

        // Create a new canvas element.
        const canvas = document.createElement('canvas');

        // Get the context of the canvas element.
        const ctx = canvas.getContext('2d');
        canvas.width = 5000;
        canvas.height = 5000;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        ctx.fillStyle = '#000';
        ctx.strokeStyle = '#eaf2ff';
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        // Append the canvas element to the DOM.
        document.body.appendChild(canvas);

        this.connectionMode = false;
        this.lastConnection.setSecondId(name);
        this.lastConnection.setCanvas(canvas);
        this.connections.push(this.lastConnection);
        this.lastConnection = null;
    }

    UpdateCanvas(name: string) {
        this.connections.forEach(connection => {
            if(connection.contains(name)){
                connection.updateCanvas();
            }   
            
        });
    }

}
import { Component, Input } from '@angular/core';
import { TopologyController } from 'src/app/controllers/TopologyController';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  @Input() controller:TopologyController;
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  
}

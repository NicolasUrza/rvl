import { Component, Input } from '@angular/core';
import { TopologyController } from 'src/app/controllers/TopologyController';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  moving = false;
  @Input() controller: TopologyController;
}

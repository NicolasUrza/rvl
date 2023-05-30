import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Terminal } from 'xterm';
declare var electron: any;
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.showTerminal()

  }

  @Input() name:string;

  showTerminal():void{

    var term = new Terminal({
      fontSize: 40,
      letterSpacing:-13,
      fontWeight:700,
    
    });
    
    term.open(document.getElementById("terminal" + this.name));
    
    term.onData(e => {
      electron.ipcRenderer.send("terminal.toTerm", e);
    });
    
    electron.ipcRenderer.on('terminal.incData', function(event, data) {
      term.write(data);
    });

    term.writeln("Welcome to the " + this.name + " terminal");



  }
}

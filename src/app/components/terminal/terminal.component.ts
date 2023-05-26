import { Component, Input, OnInit, Renderer2 } from '@angular/core';


import { Terminal } from 'xterm';
import { ipcRenderer } from 'electron';
declare const window: any;

interface TerminalData {
  data: string;
}

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit{
  ngOnInit(): void {
    this.initIPC();
  }
  term: any;
  @Input() name:string;

  sendMessage(mensaje: string) {
    window.postMessage({ tipo: 'terminal.toTerm', mensaje }, '*');
  }
 
  showTerminal():void{

    this.term = new Terminal({
        fontSize: 40,
        letterSpacing:-13,
        fontWeight:700
      });

      this.term.open(document.getElementById("terminal"+this.name));

      this.term.onData((e: string) => {
        this.sendToElectron(e);
      });

      
  }

  initIPC() {
    window.electronApi.receiveFromElectron((data: TerminalData) => {
      this.term.write(data.data);
    });
  }

  sendToElectron(data: string) {
    const terminalData: TerminalData = {
      data: data
    };
    window.electronApi.sendToElectron(terminalData);
  }

}

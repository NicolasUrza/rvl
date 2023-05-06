const { Terminal } = require('xterm');
const ipc = require('electron').ipcRenderer;

var term = new Terminal({
  fontSize: 40,
  letterSpacing:-13,
  fontWeight:700
});

term.open(document.getElementById("terminal"));

term.onData(e => {
  ipc.send("terminal.toTerm", e);
});

ipc.on('terminal.incData', function(event, data) {
  term.write(data);
});

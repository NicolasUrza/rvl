const { app, BrowserWindow, ipcMain } = require("electron");
const os = require('os');
const pty = require('node-pty')

var shell = os.platform() === 'win32'? "powershell.exe": "bash";


let appWin;

createWindow = () => {
    appWin = new BrowserWindow({
        width: 900, 
        minWidth: 900,
        height: 600, 
        minHeight: 600,
        title: "Angular and Electron",
        resizable: true,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });
    
    appWin.loadURL(`file://${__dirname}/dist/index.html`);

    appWin.setMenu(null);
    appWin.webContents.openDevTools();
    //maximizar pantalla
    appWin.maximize();

    appWin.on("closed", () => {
        appWin = null;
    });


    var ptyProcess = pty.spawn(shell,[],{
        name:'xterm-color',
        cols: 80,
        rows: 24,
        cwd: process.env.HOME,
        env: process.env,
       


    });

ptyProcess.onData(data => {
 
appWin.webContents.send('terminal.incData',data)
});
 

ipcMain.on('terminal.toTerm', function(event,data){

    ptyProcess.write(data)
});

}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

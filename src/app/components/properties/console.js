const os = require('os');
const { spawn } = require('node-pty');

function puesta_a_cero() {
  const configuracion = self.uml_device.get_configuracion();
  const nombre = self.uml_device.get_nombre_logico();
  const hostname = generar_hostname();

  const executeCommand = (command) => {
    const ptyProcess = spawn(os.platform() === 'win32' ? 'cmd.exe' : 'bash', ['-c', command], {
      cwd: process.cwd(),
      env: process.env,
    });

    ptyProcess.on('exit', (code) => {
      if (code === 0) {
        console.log(`Command executed successfully: ${command}`);
      } else {
        console.error(`Command execution failed: ${command}`);
      }
    });
  };

  // Borrando archivo cow
  executeCommand(`if [ -f "/tmp/${nombre}.cow" ]; then rm /tmp/${nombre}.cow; fi`);
  executeCommand(`if [ -f "/tmp/${nombre}_repo.cow" ]; then rm /tmp/${nombre}_repo.cow; fi`);

  // Borrando archivo tar.gz
  executeCommand(`rm /tmp/${hostname}-*.tar.gz`);
  executeCommand(`rm /tmp/${hostname}.tar.gz`);

  // Borrando otros archivos
  if (fs.existsSync(`/tmp/${hostname}.conf`)) {
    executeCommand(`rm /tmp/${hostname}.conf`);
  }
  if (fs.existsSync(`/tmp/${hostname}-firstboot.sh`)) {
    executeCommand(`rm /tmp/${hostname}-firstboot.sh`);
  }
  if (fs.existsSync(`/tmp/${hostname}-customrcs.sh`)) {
    executeCommand(`rm /tmp/${hostname}-customrcs.sh`);
  }

  if (configuracion.existe_atributo('preparado') && configuracion.get_atributo('preparado')) {
    configuracion.set_atributo('preparado', false);
  }
}
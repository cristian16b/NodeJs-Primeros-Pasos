const fs=require('fs');
const path = 'nuevoDirectorio';
const nombreArchivo = 'miTxt';

fs.stat(path, function(err) {
  if (!err) {
      console.log('file or directory exists');
  }
  else if (err.code === 'ENOENT') {
      // console.log('file or directory does not exist');
      crearDirectorio();
  }
});

crearDirectorio = () => {
  fs.mkdir(path, { recursive: true }, (err) => {
    if (err) 
    {
      console.log('Fallo creación del archivo en la ruta: ' + path);
    }
  });
}
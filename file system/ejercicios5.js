const fs=require('fs');
const path = 'nuevoDirectorio';
const nombreArchivo = 'miTxt';

fs.stat(path, function(err) {
  if (!err) {
      console.log('file or directory exists');
      // creo y escribo el nuevo archivo
      crearArchivo();
      leerArchivo();
  }
  else if (err.code === 'ENOENT') {
      console.log('file or directory does not exist');
      crearDirectorio();
  }
});

crearDirectorio = () => {
  fs.mkdir(path, { recursive: true }, (err) => {
    if (err) 
    {
      console.log('Fallo creación del archivo en la ruta: ' + path);
    }
    else {
      console.log('Se creo el directorio');
      // creo y escribo el nuevo archivo
      crearArchivo();
      leerArchivo();
    }
  });
}

crearArchivo = () => {
  let pathFile = path + '/' + nombreArchivo;
  fs.writeFile(pathFile, 'línea 1\nLínea 2', error => {
    if (error)
      console.log(error);
    else
      console.log('El archivo fue creado');
  });
}

leerArchivo = () => {
  let pathFile = path + '/' + nombreArchivo;
  fs.readFile(pathFile, (error,datos) => {
    if (error)
      console.log(error);
    else
      console.log(datos.toString());
  });
}

console.log('fin del script');
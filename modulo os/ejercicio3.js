const os=require('os');

console.log('Sistema operativo:'+os.platform());
console.log('Versión del sistema operativo:'+os.release());
console.log('Memoria total:'+os.totalmem()+' bytes');
console.log('Memoria libre:'+os.freemem()+' bytes');
console.log('Home directorio: ' + os.homedir());
console.log('Home directorio: ' + os.hostname());
console.log('Info usuario: ' + JSON.stringify(os.userInfo()));
console.log('Tipo sist. op.: ' + os.type());
console.log('Cpus: ' + JSON.stringify(os.cpus()));

// creo un vector y veo como cambia la memoria libre
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('Memoria libre:'+os.freemem());
const vec=[];
for(let f=0;f<1000000;f++) {
  vec.push(f);
}	
console.log('Memoria libre después de crear el vector:'+os.freemem());
//importamos modulos necesarios
const http = require('http')

//usamos createServer (metodo) y le entregamos
// una funcion callback con parametros para

http
.createServer(function (req, res) { //--> req = requerimiento ( lo que pide ) --> res = es una respuesta a lo que pueda pedir
   //Aqui mostramos la url de donde se está haciendo alguna " consulta " como para hacer algo .. 
    console.log(req.url)

//aqui vamos a guardar la url (o la direccion)
    const url = req.url
    if(url== '/donFelipes'){
        res.write(`${new Date()}`)
    }
    res.end()
    //imprimimos un mensaje
    console.log('que clase de servidor sin don Cesar es este??? ')
})
//usamos metodo listen para usar poner en marcha
//nuestro servidor, hay que indicar el puerto tambien
.listen(3000,() => {
    console.log('mirá de quien te burlaste Cesar !!!! ... Mirá! xD')
}   )
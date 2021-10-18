//importamos modulos necesarios
const http = require('http')
const url = require('url')

//usamos createServer (metodo) y le entregamos
// una funcion callback con parametros para

http
.createServer(function (req, res) { //--> req = requerimiento ( lo que pide ) --> res = es una respuesta a lo que pueda pedir
   //Aqui mostramos la url de donde se está haciendo alguna " consulta " como para hacer algo .. 
    console.log(req.url)

//aqui vamos a guardar la url (o la direccion)
 //   const url = req.url
    if(url== '/donFelipes'){
        res.write(`${new Date()}`)
        res.end()
    }


   

    const params = url.parse(req.url, true).query
    console.log(params)

    let donFelipes = [{

        rut: '123456789',
        nombre: 'don',
        apellido: 'Felipes',
    },
]
    if(req.url.includes('/getdonFelipes')){
        let felipes = donFelipes.find((f) => f.rut == params.rut)
        felipes 
        ? res.write('usted es don Felipes!!! :)')
        : res.write('usted no es donFelipes!!! :(')
        res.end()
    }


    if (true) {
        console.log('llego algo')
    }else {
        console.log('no llego nada xd')
    }
    //imprimimos un mensaje
    console.log('que clase de servidor sin don Cesar es este??? ')
}


)
//usamos metodo listen para usar poner en marcha
//nuestro servidor, hay que indicar el puerto tambien
.listen(4000,() => {
    console.log('mirá de quien te burlaste Cesar !!!! ... Mirá! xD')
}   )
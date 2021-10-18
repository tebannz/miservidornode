//importamos modulos necesarios
const http = require('http')
const url = require('url')

//usamos createServer (metodo) y le entregamos
//una funcion callback con parametros

http
.createServer(function(req, res) {
    console.log(req.url)
    //const url = req.url
    if(url== '/donFelipes'){
        res.write(`${new Date()}`)
    }
    
    const params = url.parse(req.url, true).query
    console.log(params)

    let donFelipes = [
        {
            rut: '123456789',
            nombre: 'don',
            apellido: 'Felipes',
        },
    ]

    if(req.url.includes('/getDonFelipes')){
        let felipes = donFelipes.find((f) => f.rut == params.rut)
        felipes
        ? res.write('usted es don Felipes!!! :)')
        : res.write('usted no es don Felipes :(')
        }
    res.end()
    //imprimimos un mensaje
    console.log('que clase de servidor sin don Cesar es este???')
})
//usamos metodo listen para usar poner en marcha 
//nuestro servidor, hay que indicar el puerto tambien
.listen(3000, () => {
    console.log('mirá de quien te burlaste Cesar!!!... Mirá!')
}
)
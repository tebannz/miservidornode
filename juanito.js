const http = require('http')
const url = require('url')
const fs = require('fs')

http
.createServer((req,res)=>{
    res.writeHead(200, { 'content-type': 'text/html' })
    const parametros = url.parse(req.url, true).query

    //"procesos" de creacion del archivo
    if(req.url.startsWith('/crear')){
        let agnio = new Date().getFullYear()
        let mes = new Date().getMonth() + 1
        let dia = new Date().getDate()
        let fecha = `${dia < 10 ? '0'+dia : dia}-${mes < 10 ? '0'+mes : mes}-${agnio}`
        fs.writeFile(`${parametros.nombreArchivo}-${fecha}.txt`
        , `${fecha} = ${parametros.contenido}`
        , () => {
        const mensaje = fs.readFileSync(`${parametros.nombreArchivo}-${fecha}.txt`, 'utf-8')
        if(mensaje){
            res.write('Archivo Creado...', (err) =>{
                err ? res.write('Se pudrio todo :(') : res.end()
            })
            }
        })
    }

    //"proceso" de lectura del archivo
    if(req.url.startsWith('/leer')){
        fs.readFile(parametros.nombreArchivo
        ,'utf-8'
        , (err, data) =>{
            if(err){
                res.write('Archivo no encontrado', ()=>{
                    return res.end()
                }
                )
            } else {
                res.write(data, ()=>{
                    return res.end()
                })
            }
        }
        )
    }

    //"Proceso" para cambiar el nombre
    if(req.url.startsWith('/renombrar')){
        fs.rename(parametros.nombreArchivo
        ,parametros.nuevoNombre
        ,(err)=>{
            if(err){
                res.write('Archivo no encontrado', ()=>{
                    return res.end()
                }
                )
            } else {
                res.write(`Archivo ${parametros.nombreArchivo} se cambio el nombre por ${parametros.nuevoNombre}`
                , ()=>{
                    return res.end()
                })
            }
        })
    }

    //"Proceso" para eliminar archivo
    if(req.url.startsWith('/eliminar')){
        fs.unlink(parametros.nombreArchivo
            , (err) =>{
                if(err){
                    res.write('El archivo no existe...', () => {
                        return res.end()
                        }
                    )
                } else{
                    res.write(`comienza el proceso de eliminar el archivo ${parametros.nombreArchivo}`)
                    setTimeout(()=>{
                        res.write('Archivo eliminado con exito!', () => {
                            res.end()
                        })
                    }, 2000)
                }
            }
        )

    }

})
.listen(3000, ()=>{console.log('Servicio http://localhost:3000')})

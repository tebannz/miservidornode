const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req,res)=>{
  res.writeHead(200, {'content-type':'text/html'})
  const params = url.parse(req.url,true).query
  if(req.url.startsWith('/crear')){
    let agnio = new Date().getFullYear()
    let mes = new Date().getMonth() +1
    let dia = new Date().getDate()
    let fecha= `${(dia < 10 ? '0'+ dia:dia)}-${(mes < 10 ? '0'+mes:mes)}-${agnio}`
    fs.writeFile(`${params.nombreArchivo}-${fecha}.txt`
    ,`${fecha} = ${params.contenido}`
    ,()=>{
      const mensaje = fs.readFileSync(`${params.nombreArchivo}-${fecha}.txt` ,'utf-8')
      if(mensaje){
        res.write('Archivo Creado...',(err)=>{ 
          err ?  res.write('Se pudrio todo :('): res.end()
        })
      }

  })
  }

})

.listen(3000,()=> {
    console.log('Servidor http://localhost:3000')
}
)
const {Client} = require('pg');

const configuracionPG = {
    user: 'postgres',
    host: 'localhost', 
    database: 'postgres', 
    password: 'dockerpw',
    port: '5432', 
}

const cliente = new Client(configuracionPG);

console.log(cliente.connect())

cliente.query('SELECT NOW', (err, res)=>{
    console.log(res)
  
    
})

cliente.query('SELECT * FROM prueba.persona;', (err, res) => {
    if (err) throw err
    console.log(res);
    cliente.end();
});
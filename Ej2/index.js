const express = require("express");
const app = express();



app.get('/',(req,res)=>{
    res.send('Hola Chibolos!')
    
    })


     app.get('/productos',(req,res)=>{
        res.send('listado de productos')
        
     })


     app.post('/productos',(req,res)=>{
        res.send('crear un producto')
        
     })


     app.put('/productos',(req,res)=>{
        res.send('actualizar un producto')
           
    })

    
     app.delete('/productos',(req,res)=>{
        res.send('borrar un producto')
                       
    })        
    

     app.get('/usuarios',(req,res)=>{
        res.send('listado de usuarios')
                           
    }) 


     app.post('/usuarios',(req,res)=>{
        res.send('crear un usuario')
                                   
     }) 

     app.put('/usuarios',(req,res)=>{
        res.send('actualizar un usuario')
                                   
     }) 

     app.delete('/usuarios',(req,res)=>{
        res.send('borrar un usuario')
                                   
     }) 


        
 





app.listen("3000", () => {
   console.log("Servidor levantado en el puerto", 3000);
    
    });
    
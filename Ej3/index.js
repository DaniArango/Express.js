const express = require("express");
const app = express();
app.use(express.json());


const productos = [
    {
      id: 1,
      nombre: 'Taza de Harry Potter',
      precio: 300,
      
    },
    {
      id: 2,
      nombre: "FIFA 22 PS5",
      precio: 1000,
    
    },
    {
      id: 3,
      nombre: "Figura Goku Super Saiyan",
      precio: 100,
    
    },
    
    {
      id: 4,
      nombre: "Shannon Jackson",
      precio: "shannon@gmail.com",   
      
      },

      {
      id: 5,
      nombre: "Skin Valorant",
      precio: 120,
      
      },

      {
      id: 6,
      nombre: "Taza de Star Wars",
      precio: 220,
      
      },
  ];



  app.get("/productos", (req, res) => {
    res.send({msg:'Productos',results:productos});
  });
  

  app.post("/productos",(req,res)=>{
    const nuevosProductos ={
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    }
    if(!req.body.nombre || !req.body.precio){
        res.status(400).send({msg:"Completar todos los campos"})
    }else{
        productos.push(nuevosProductos)
        res.status(201).send({msg: 'Producto creado correctamente, buena esa!',productos})
    }
})



app.put("/id/:id",(req,res)=>{
  const found = productos.some(producto => producto.id == req.params.id)
  if(found){
      members.forEach(producto=>{
          if(producto.id == req.params.id){
              producto.nombre = req.body.nombre ? req.body.nombre : producto.nombre,
              producto.precio = req.body.precio ? req.body.precio : producto.precio
              res.send(producto)
          }
      })
  }else{
      res.status(404).send({msg:`Producto con id ${req.params.id} no enconttado`})
  }
})


app.delete("/id/:id", (req, res) => {
  const found = productos.some(producto => producto.id == req.params.id)
  if (found) {
      res.send(productos.filter(producto => producto.id != req.params.id))
  } else {
      res.status(404).send({ msg: `Producto con id ${req.params.id} no encontrado` })
  }
})



app.listen("3000", () => {
    console.log("Servidor levantado en el puerto", 3000);

});


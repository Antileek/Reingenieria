const router = require('express').Router();
const conexion = require('./config/conexion');

//get cria total
router.get('/productos',(req,res) =>{
    let sql = 'select * from Producto';
    conexion.query(sql,(err,rows,fields) =>
    {
        if(err)
            throw err;
        res.json(rows);
    })
})

//Get by Id
router.get('/productos/:id',(req, res)=>{
    const {id} = req.params;
    let sql =`select * from Producto where ID = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{

        if(err) 
            throw err;
        res.json(rows);

    })
})

//Registrar Producto
router.post('/productos',( req, res)=>{
    const{id_proveedor,fecha, peso, costo, nombre, descripcion, estado_producto} = req.body
    let sql = `insert into Producto (IdProveedor,Fecha, Peso, Costo, Nombre, Descripcion, EstadoProducto) 
    values 
    ('${id_proveedor}}','${fecha}', '${peso}', '${costo}', '${nombre}', '${descripcion}', '${estado_producto}')`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Producto registradro correctamente'});
        
    })
})

//Delete Producto 
router.delete('/productos/:id',(req, res)=>{
    const{id} = req.params;
    let sql =`delete from Producto where ID = '${id}'`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        
        res.json({status: 'Producto eliminado correctamente'});
        
    })
});

//Update Producto
router.put('/productos/:id',(req,res)=>{
    const{id} = req.params;
    const{nombre,id_proveedor,peso,costo,descripcion,estado_producto} = req.body
    let sql = `update Producto set 
    Nombre = '${nombre}',
    IdProveedor = ${id_proveedor},
    Peso = ${peso},
    Costo = ${costo},
    Descripcion = '${descripcion}',
    EstadoProducto = '${estado_producto}'
    where ID = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Producto modificado correctamente'});
        
    })
})

//Proveedores

//get Proveedor total
router.get('/proveedor',(req,res) =>{
    let sql = 'select * from Proveedor';
    conexion.query(sql,(err,rows,fields) =>
    {
        if(err)
            throw err;
        res.json(rows);
    })
})

//Get by Id
router.get('/proveedor/:id',(req, res)=>{
    const {id} = req.params;
    let sql =`select * from Proveedor where ID = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{

        if(err) 
            throw err;
        res.json(rows);

    })
})

//Registrar Proveedor
router.post('/proveedor',( req, res)=>{
    const{nombre} = req.body
    let sql = `insert into Proveedor (Nombre) values ('${nombre}')`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Proveedor registradro correctamente'});
        
    })
})

//Delete Proveedor 
router.delete('/proveedor/:id',(req, res)=>{
    const{id} = req.params;
    let sql =`delete from Proveedor where ID = '${id}'`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        
        res.json({status: 'Proveedor eliminado correctamente'});
        
    })
});

//Update Proveedor
router.put('/proveedor/:id',(req,res)=>{
    const{id} = req.params;
    const{nombre} = req.body;
    let sql = `update Proveedor set Nombre = '${nombre}' where ID = ${id}`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        
        res.json({status: 'Proveedor modificado correctamente'});
        
    })
})


module.exports = router;
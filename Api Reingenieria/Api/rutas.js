const router = require('express').Router();
const conexion = require('./config/conexion');

//get cria total
router.get('/productos',(req,res) =>{
    let sql = 'select * from producto';
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
    let sql =`select * from producto where ID = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{

        if(err) 
            throw err;
        res.json(rows);

    })
})

//Registrar Producto
router.post('/productos',( req, res)=>{
    const{IdProveedor,FechaDeCaducidad, Cantidad, PesoUnitario, CostoUnitario, PrecioDeVenta, Nombre, Descripcion, EstadoProducto} = req.body
    let sql = `insert into producto (IdProveedor, FechaDeCaducidad, Cantidad, PesoUnitario, CostoUnitario, PrecioDeVenta, Nombre, Descripcion, EstadoProducto) 
    values 
    ('${IdProveedor}', '${FechaDeCaducidad}', '${Cantidad}', '${PesoUnitario}', '${CostoUnitario}', '${PrecioDeVenta}','${Nombre}', '${Descripcion}', '${EstadoProducto}')`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Producto registradro correctamente'});
        
    })
})

//Delete Producto 
router.delete('/productos/:id',(req, res)=>{
    const{id} = req.params;
    let sql =`delete from producto where ID = '${id}'`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        
        res.json({status: 'Producto eliminado correctamente'});
        
    })
});

//Update Producto
router.put('/productos/:id',(req,res)=>{
    const{id} = req.params;
    //(IdProveedor, FechaDeIngreso, FechaDeCaducidad, Cantidad, PesoUnitario, CostoUnitario, PrecioDeVenta, Nombre, Descripcion, EstadoProducto) 
    const{Cantidad, PesoUnitario, CostoUnitario, PrecioDeVenta, Nombre, Descripcion, EstadoProducto} = req.body
    let sql = `update Producto set 
    Nombre = '${Nombre}',
    IdProveedor = ${IdProveedor},
    Peso = ${peso},
    Cantidad = ${Cantidad},
    PesoUnitario = ${PesoUnitario},
    PrecioDeVenta = ${PrecioDeVenta},
    CostoUnitario = ${CostoUnitario},
    Descripcion = '${Descripcion}',
    EstadoProducto = '${EstadoProducto}'
    where ID = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Producto modificado correctamente'});
        
    })
})

//Proveedores

//get Proveedor total
router.get('/proveedores',(req,res) =>{
    let sql = 'select * from proveedor';
    conexion.query(sql,(err,rows,fields) =>
    {
        if(err)
            throw err;
        res.json(rows);
    })
})

//Get by Id
router.get('/proveedores/:id',(req, res)=>{
    const {id} = req.params;
    let sql =`select * from proveedor where ID = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{

        if(err) 
            throw err;
        res.json(rows);

    })
})

//Registrar Proveedor
router.post('/proveedores',( req, res)=>{
    const{Nombre,NumeroContacto} = req.body
    let sql = `insert into proveedor (Nombre, NumeroContacto) values ('${Nombre}','${NumeroContacto}')`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        res.json({status: 'Proveedor registradro correctamente'});
        
    })
})

//Delete Proveedor 
router.delete('/proveedores/:id',(req, res)=>{
    const{id} = req.params;
    let sql =`delete from proveedor where ID = '${id}'`;
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        
        res.json({status: 'Proveedor eliminado correctamente'});
        
    })
});

//Update Proveedor
router.put('/proveedores/:id',(req,res)=>{
    const{id} = req.params;
    const{nombre,NumeroContacto} = req.body;
    let sql = `update proveedor set Nombre = '${nombre}', NumeroContacto = '${NumeroContacto}' where ID = ${id}`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) 
            throw err;
        
        res.json({status: 'Proveedor modificado correctamente'});
        
    })
})


module.exports = router;
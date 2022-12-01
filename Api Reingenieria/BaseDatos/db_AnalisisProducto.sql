DROP SCHEMA IF EXISTS `db_AnalisisProducto` ;
CREATE SCHEMA IF NOT EXISTS `db_AnalisisProducto` ;

CREATE TABLE IF NOT EXISTS `db_AnalisisProducto`.`Proveedor` (
  `ID` INT NOT NULL auto_increment,
  `Nombre` VARCHAR(150) NOT NULL,
  `NumeroContacto` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`ID`)
  );
  
  CREATE TABLE IF NOT EXISTS `db_AnalisisProducto`.`Producto` (
  `ID` INT NOT NULL auto_increment,
  `IdProveedor` INT NOT NULL,
  `FechaDeIngreso` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  `FechaDeCaducidad` DATETIME,
  `Cantidad` INT NOT NULL,
  `PesoUnitario` DOUBLE NOT NULL,
  `CostoUnitario` DECIMAL(18,2) NOT NULL,
  `PrecioDeVenta` DECIMAL(18,2) NOT NULL,
  `Nombre` VARCHAR(150) NOT NULL,
  `Descripcion` VARCHAR(150) NULL,
  `EstadoProducto` DECIMAL(18,2) NOT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `FK_Producto_Proveedor`
    FOREIGN KEY (`IdProveedor`)
    REFERENCES `db_AnalisisProducto`.`Proveedor` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );
    
insert into proveedor (Nombre, NumeroContacto) 
		values ('Elliotsda','6671717171');

select * from proveedor;
    
insert into producto (IdProveedor, FechaDeCaducidad, Cantidad, PesoUnitario, CostoUnitario, PrecioDeVenta, Nombre, Descripcion, EstadoProducto) 
    values (1,now(),10,1,10,20,'chicle de a peso','rico',1);

select * from producto;



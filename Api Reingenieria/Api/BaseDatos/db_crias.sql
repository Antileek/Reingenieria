DROP SCHEMA IF EXISTS `db_AnalisisProducto` ;
CREATE SCHEMA IF NOT EXISTS `db_AnalisisProducto` ;

CREATE TABLE IF NOT EXISTS `db_AnalisisProducto`.`Proveedor` (
  `ID` INT NOT NULL auto_increment,
  `Nombre` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`ID`)
  );
  
  CREATE TABLE IF NOT EXISTS `db_AnalisisProducto`.`Producto` (
  `ID` INT NOT NULL auto_increment,
  `IdProveedor` INT NOT NULL,
  `Fecha` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  `Peso` DOUBLE NOT NULL,
  `Costo` DECIMAL(18,2) NOT NULL,
  `Nombre` VARCHAR(150) NOT NULL,
  `Descripcion` VARCHAR(150) NULL,
  `EstadoProducto` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`ID`),
  CONSTRAINT `FK_Producto_Proveedor`
    FOREIGN KEY (`IdProveedor`)
    REFERENCES `db_AnalisisProducto`.`Proveedor` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );



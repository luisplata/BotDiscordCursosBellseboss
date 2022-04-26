CREATE TABLE `dominio` ( `identificador` INT NOT NULL AUTO_INCREMENT , `nombre` VARCHAR(2000) NOT NULL , PRIMARY KEY (`identificador`), UNIQUE `dominioUnico` (`nombre`));

insert into dominio (nombre) values 
('domestika')

--rollback
/*

drop table dominio;

/*
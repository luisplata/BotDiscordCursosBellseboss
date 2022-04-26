CREATE TABLE `curso` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `dominio_id` INT NOT NULL , 
    `url` VARCHAR(2000) NOT NULL , 
    PRIMARY KEY (`id`)
);

--rollback
/*

drop table curso

*/
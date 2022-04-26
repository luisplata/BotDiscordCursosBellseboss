const Command = require("./Command");
const validator = require("validator");
const mysql = require("../../utilitys/conexion");
const logger = require("../../utilitys/logs").log();
module.exports = class AddCourseCommand extends Command{
    id = "add_course";
    Run(args, callbackOk, callbackBad) {
        //console.log(args);
        //validar que sea una URL valida
        if (!validator.isURL(args)) {
            callbackBad("La URL no es valida");
        }
        //que sea de los dominios permitidos
        let puedeContinuar = false;
        let consultaFin = false;
        this.Consulta(args, (canContinue) => {
            if(!canContinue){
                callbackBad("el dominio no esta permitido");
            }
            callbackOk("El curso esta permitido");
        });
        //que no exista un curso con ese nombre
        //return "El curso se ha agregado correctamente";
    }

    Consulta(args, callback) {
        try{
            mysql.Consulta("select * from dominio",function(req){
                //console.log(req);
                req.forEach(value => {
                    console.log(args, value.nombre, args.includes(value.nombre), "compare");
                    if(args.includes(value.nombre)){
                        console.log("puede continuar");
                        callback(true);
                    }
                })
                logger.info(req);
            },function (err) {
                logger.error(err);
            });
        }catch (e){
            logger.error(e);
        }
        callback(false);
    }

}
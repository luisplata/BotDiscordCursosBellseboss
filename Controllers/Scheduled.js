const requestPromise = require('request-promise');
const Cheerio = require('cheerio');
//const url = 'https://www.procyclingstats.com/rankings.php';
module.exports = class Scheduled{
    RunAllSchedules(){
        //consultar todos los schedules
        //recorrer todos los schedules
        //ejecutar el schedule

        var url = "https://peryloth.com";
        //#wrapper > section.panel.color4-alt > div.inner.columns.divided > div > ul
        requestPromise(url)
            .then(html => {
                const $ = Cheerio.load(html);
                const rankingTable = $('#wrapper > section.panel.color4-alt > div.inner.columns.divided > div > ul');
                rankingTable.each((i,el) => { // RECORREMOS TODOS LOS NODOS QUE HEMOS ALMACENADO
                    console.log($(el).text());
                });
            })
            .catch(error => {
                ///handling error
                console.log(error);
            });

        var url = "https://www.domestika.org/es/courses/262-de-principiante-a-superdibujante";
        requestPromise(url)
            .then(html => {
                //console.log(html);
                const $ = Cheerio.load(html)
                const rankingTable = $('#js-sidebar-course > div > div.m-stack__item.sidebar-course__actions > span > span.d\\:flex.fxd\\:column.gap-xxs.mb-3 > span > span');
                let porcentaje = $(rankingTable).html().slice(0, 5);
                if(porcentaje.includes("100%")){
                    porcentaje = 100;
                }else{
                    porcentaje = parseInt(porcentaje.slice(0,3));
                }
                console.log(porcentaje);
            })
            .catch(error => {
                console.log(error);
            });
    }
}



module.exports = class Command{
    id;
    constructor(id){
        this.id = id;
    }
    get Id(){
        return this.id;
    }
    Run(args, callbackOk, callbackBad){
        return args;
    }
}
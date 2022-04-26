const Command = require("./Command");
module.exports = class TestCommand extends Command{
    Run(args){
        //console.log(args, "class test");
        return "TestCommand";
    }
}
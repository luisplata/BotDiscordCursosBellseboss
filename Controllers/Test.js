const TestCommand = require("./Commands/TestCommand");
const AddCourseCommand = require("./Commands/AddCourseCommand");
module.exports = class Test{
    listOfCommands = [new TestCommand("test"), new AddCourseCommand()];
    UserCase(commando){
        //console.log(this.listOfCommands);
        var response = "";
        this.listOfCommands.forEach(function(command){
            //console.log(command.Id, commando,args, "testjsfirt");
            if(command.Id === commando){
                //console.log(command.Run(args), "testjs");
                response = command;
            }
        });
        return response;
    }
}
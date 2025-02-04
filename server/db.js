const mongoose = require("mongoose");
module.exports = function(app){
    const dbURI = 'mongodb+srv://cloudriftdbuser:TBfJLK03zkhEFilt@cloudrift.rsnae.mongodb.net/?retryWrites=true&w=majority&appName=cloudrift'
    mongoose.connect(dbURI);
}
 
// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");


 

const userName = " ";
const userPassword = " ";

const dbName = "ATN_shop";
 

const url = "mongodb+srv://" +
    userName + ":" + userPassword +     
    "@cluster0.x8ieg.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";
function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}

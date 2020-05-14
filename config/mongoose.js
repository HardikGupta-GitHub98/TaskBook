// MONGOOSE PACKAGE IS IMPORTED
const mongoose = require("mongoose");

// MONGOOSE IS CONNECTED TO THE MONGODB
mongoose.connect("mongodb://localhost/TaskBook_Development", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

// IN CASE OF ERROR THE FOLLOWING MESSAGE IS PRINTED
db.on("error", console.error.bind(console, "Error Connecting To database"));

// IF THE CONNECTION IS SUCCESSFUL THEN FOLLOWING MESSAGE IS PRINTED ON THE CONSOLE
db.once("open", function () {
	console.log("Connected To MongoDB");
});

// FINNALY TEXPORT THE DB CREATED IN THIS MODULE
module.exports = db;

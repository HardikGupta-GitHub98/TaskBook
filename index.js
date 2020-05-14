//  INSTANCE OF EXPRESS IS CREATED
const express = require("express");
const app = express();
// A PORT IS ASSIGNED TO THE SERVER
const port = 3000;

// DB IS IMPORTED FFROM THE MONGOOSE.JS
const db = require("./config/mongoose.js");

// TASKS IS IMPORTED FROM THE task.js file INSIDE THE MODELS FOLDER
const Tasks = require("./models/task");
// Setting Up Assets For The Static File (.css, Scripts , Images)
const assets = express.static("./assets");
//MiddleWare To Use The assets
app.use(assets);
app.use(express.urlencoded());
//Importing Router From The index.js File Inside Routes Folder
const router = require("./routes/index");
//MiddleWare To Use The Router Imported Above
app.use("/", router);

// Setting Up View Engine To ejs
app.set("view engine", "ejs");
//Setting up Directory To look For Ejs files
app.set("views", "./views");

// LISTENING FUNCTION FOR THE SERVER
app.listen(port, function (err) {
	if (err) {
		console.log(`Error In Loading The Server: ${err}`);
	} else {
		console.log(`Server Is Runnning At Port ${port}`);
	}
});

// CONTROLLER FOR THE HOME PAGE
// ALL THE REQUIRED MODULES ARE IMPORTED
const mongoose = require("mongoose");
const Task = require("../models/task");

// THIS IS THE MOMENT PACKAGE OF THE NODE JS WHIC IS USED TO SHOW THE CURRENT DATE AND TIME ON THE
// WEBSITES AND APPS.
// THE BACKGROND COLOR FOR THE TASKS WHOSE DUE-DATE IS THE CURRENT DATE
// IS RED
const moment = require("moment");

// CONTROLLER GOR RENDERING THE HOME PAGE
module.exports.home = function (req, res) {
	Task.find({}, function (err, tasks) {
		if (err) {
			console.log(`Error Fetching Tasks From DB  ${err}`);
		} else {
			res.render("home", {
				title: "Home",
				Pending_Tasks: tasks,
				moment: moment,
			});
		}
		return;
	});
};

// CONTROLLER FOR CREATING A NEW TASK
module.exports.create = function (req, res) {
	Task.create(
		{
			description: req.body.description,
			category: req.body.category,
			duedate: req.body.duedate,
		},
		function (err, newTask) {
			if (err) {
				console.log(`Error in DB ${err}`);
				res.redirect("back");
			} else {
				console.log("Added Task", newTask);
				res.redirect("back");
			}
			return;
		}
	);
};

// CONTROLLER FOR DELETING MULTIPLE TASKS
module.exports.delete = function (req, res) {
	const i = req.body.dbtask;
	console.log(i);

	for (const j of i) {
		var id = mongoose.Types.ObjectId(j);

		Task.findByIdAndDelete(id, function (err) {
			if (err) {
				console.log(`Error In Deleting The Task ${err}`);
			}
		});
	}
	res.redirect("back");
	return;
};

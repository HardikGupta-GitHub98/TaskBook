const db = require("../config/mongoose.js");
const Tasks = require("../models/task");

module.exports.home = function (req, res) {
	Tasks.find({}, function (err, tasks) {
		if (err) {
			console.log(`Error Fetching Tasks From DB  ${err}`);
		} else {
			res.render("home", {
				title: "Home",
				Pending_Tasks: tasks,
			});
		}
		return;
	});
};

module.exports.create = function (req, res) {
	Tasks.create(
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

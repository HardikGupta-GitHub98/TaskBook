const mongoose = require("mongoose");

const Task = require("../models/task");

module.exports.home = function (req, res) {
	Task.find({}, function (err, tasks) {
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

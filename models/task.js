const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
	{
		desctrition: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		duedata: {
			type: String,
			required: true,
		},
	},

	{
		timestamps: true,
	}
);

const Task = mongoose.model("Task", userSchema);

module.exports = Task;

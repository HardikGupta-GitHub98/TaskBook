// IMPORTING THE MONGOOSE USING NPM
const mongoose = require("mongoose");
// CREATING SCHEMA FOR THE TASKS

// FIELDS DESCRIPTION AND DATE ARE SET AS REQUIRED
const taskSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		duedate: {
			type: String,
			required: true,
		},
	},
	// TIME STAMP TO KNOW WHEN A NEW TASK WAS CREATED OR MODIFIED
	{
		timestamps: true,
	}
);

// CREATING AN INSTANCE OF THE MODEL AND EXPORTION IT WHEREVER REQUIRED
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

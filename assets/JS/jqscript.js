// JQUERY COMMAND TO STRIKE-THROUGH THE TEXT IF THE CHECKBOX IS TICKED
$(".single-task").change(function () {
	if (this.checked) {
		$(this).next().children().css("text-decoration", "line-through");
	} else {
		$(this).next().children().css("text-decoration", "none");
	}
});

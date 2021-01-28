let ask = (q, y, n) => (confirm(q)) ? y() : n();

ask(
	"Are you sure?",
	function () {
		alert("Accepted");
	},
	function () {
		alert("Declined");
	}
	);
const foo = "bar";
const fs = require("fs");

module.exports = function() {
	if (foo === "bar") {
		const buf = fs.readFileSync("input.docx");
		return buf;
	}
	return "baz";
};

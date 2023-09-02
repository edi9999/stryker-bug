/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
	packageManager: "npm",
	reporters: ["html", "clear-text", "progress"],
	testRunner: "mocha",
	coverageAnalysis: "perTest",
	ignorePatterns: [],
	mutate: [
		"foo.js"
	],
	mochaOptions: {
		spec: ["test/foo.test.js"],
	},
};

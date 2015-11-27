var messenger = require("../../../lib/messenger.js");
var res = require("../../../mock_modules/node_modules/res.js");

describe("messenger", function() {
	it("#processIndex", function(done) {
		res._setup('render', 'index', {}, done);
		messenger.processIndex({}, res);
	});
	it("#processGet", function(done) {
		res._setup('json', 'get', {}, done);
		messenger.processGet({}, res);
	});
});

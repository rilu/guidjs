(function() {

	var guid = {};

    if (typeof module !== 'undefined') {
        exports = module.exports = guid;
    } else {
        this.guid = guid;
    }

    var randomHex = function() {
			return Math.floor(Math.random() * 16).toString(16);
	};

    guid.newGuid = function() {
    	return "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx".replace(/[x]/g, function(x) { return randomHex(); });
    };

})(this);
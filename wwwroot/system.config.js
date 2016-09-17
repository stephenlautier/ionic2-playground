/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */

(function (global) {
	// wildcard paths
	var paths = {
		"*": "dist/*",
		"n:*": "node_modules/*"
	};

	// map tells the System loader where to look for things
	var map = {
		"app": "app",
		"test": "test",
		"rxjs": "n:rxjs",
		"@angular": "n:@angular",
		"@ssv": "n:@ssv",
		"lodash": "n:lodash",
		"ionic-angular": "n:ionic-angular",
	};

	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		"app": { defaultExtension: "js" },
		"test": { defaultExtension: "js" },

		// angular
		"@angular/core": { main: "bundles/core.umd.min.js" },
		"@angular/compiler": { main: "bundles/compiler.umd.js" },
		"@angular/common": { main: "bundles/common.umd.min.js" },
		"@angular/forms": { main: "bundles/forms.umd.min.js" },
		"@angular/http": { main: "bundles/http.umd.min.js" },
		"@angular/platform-browser": { main: "bundles/platform-browser.umd.min.js" },
		"@angular/platform-browser-dynamic": { main: "bundles/platform-browser-dynamic.umd.min.js" },

		// vendors
		"raven-js": { main: "raven.min.js", defaultExtension: "js" },
		"rxjs": { defaultExtension: "js" },
		"ionic-angular": { main: "commonjs/index.js", defaultExtension: "js" },
		"@ssv/ng2-core": { main: "dist/amd/index.js", defaultExtension: "js" },
	};

	var packageNames = [
		"lodash",
	];

	// add package entries for angular packages in the form "@angular/common": { main: "index.js", defaultExtension: "js" }
	packageNames.forEach(function (pkgName) {
		packages[pkgName] = { main: "index.js", defaultExtension: "js" };
	});

	var config = {
		map: map,
		packages: packages,
		paths: paths
	};

	// filterSystemConfig - index.html"s chance to modify config before we register it.
	if (global.filterSystemConfig) { global.filterSystemConfig(config); }

	System.config(config);

})(this);

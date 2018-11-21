exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        smoke: 'tests/smoke/*.js',
        performance: 'tests/performance/*.js',
        regression: 'tests/regression/*.js',
        pageobject: 'tests/pageobject/pageObject.js'
    },
    specs: ['tests/browserlogs/browserlogs-1-spec.js']
};


// nightwatch.js
module.exports = {
	src_folders: ['test/TestCases/'],
	page_objects_path: "./tests/PageObjects",
	const TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER;
	test_settings: {
		default: {
			launch_url: 'www.funda.nl',
			selenium_port: 80,
			selenium_host: 'ondemand.saucelabs.com',
			silent: true,
			username: process.env.SAUCE_USERNAME,
			access_key: process.env.SAUCE_ACCESS_KEY,
			screenshots: {
				enabled: false,
				path: '',
			},
			desiredCapabilities: {
				build: `build-${TRAVIS_JOB_NUMBER}`,
				'tunnel-identifier': TRAVIS_JOB_NUMBER,
			},
			globals: {
				waitForConditionTimeout: 20000,
			},
		},
		chrome: {
			desiredCapabilities: {
				browserName: 'chrome',
				version: '47',
				platform: 'OS X 10.11',
			},
		},
		ie11: {
			desiredCapabilities: {
				browserName: 'internet explorer',
				platform: 'Windows 10',
				version: '11.0',
			},
		},
		local: {
			launch_url: 'www.funda.nl',
			silent: true,
			screenshots: {
				enabled: false,
				path: '',
			},
			globals: {
				waitForConditionTimeout: 20000,
			},
			selenium_port: 9515,
			selenium_host: "localhost",
			default_path_prefix: "",
			desiredCapabilities: {
				browserName: "chrome",
				chromeOptions: {
					args: ["--no-sandbox"]
				},
				acceptSslCerts: true
			}

		},
	},
};
## Nightwatch configuration
1. Runner have configuration in [../nightwatch.js] in root of project
2. Tests should be in [tests](../tests/) folder, unless passed explicilty to runner executor
3. Page Objects locations should be set in [../nightwatch.js]: 
```js
module.exports = {
    src_folders: ['test/TestCases/'],
    page_objects_path: "./tests/PageObjects",
    test_settings: `
```
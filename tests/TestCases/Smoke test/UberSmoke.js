/*UBER Smoke test:
    Open page, check that element is present and all content is loaded.
    Click Search button and check results are displayed
    Go back and check that last search is shown (Laatste zoekopdracht: Land Nederland)
    Search for Amsterdam +5km from 200,000 till 250,000 (to use all elements)
*/
module.exports = {
  'UberSmoke': function (client) {
    var search = client.page.SearchPage();

    search.navigate()
      .assert.title('Zoek huizen en appartementen te koop in Nederland [funda]');
    search
    .section.searchComponent
    .section.searchField
    .click('@search');
      // .assert.visible('@searchBar')
      // .setValue('@searchBar', 'nightwatch')
      // .click('@submit');

    client.end();
  }
};
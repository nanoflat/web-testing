module.exports = {
  'Demo test Funda' : function (client) {
    client
      .url('http://www.funda.nl/')
      .waitForElementVisible('body', 1000)
      .assert.title('Zoek huizen en appartementen te koop in Nederland [funda]')
      .assert.visible('autocomplete')
      .setValue('autocomplete', 'Amsterdam')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('ol#rso li:first-child',
        'Rembrandt - Wikipedia')
      .end();
  }
};
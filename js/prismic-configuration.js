var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://testgadole.prismic.io/api',

  // -- Access token if the Master is not open
  accessToken: 'MTM5ODcyOTY0Nzk5My5VMTdkbndFQUFDOEFHZkpr.OO-_ve-_ve-_vUHvv73vv701VO-_vQFv77-977-977-977-977-977-977-977-9AmcQKlcAGO-_vVYd77-9Ww',

  // -- OAuth
  clientId: 'U172TQEAACsAGiPA',
  clientSecret: 'f6e9018781df7f7bc8f9ec32341e2bb2',

  // -- Links resolution rules
  linkResolver: function(ctx, doc) {
    return 'detail.html?id=' + doc.id + '&slug=' + doc.slug + ctx.maybeRefParam;
  },

  // -- To customize: what to do when an error happens on the prismic.io side
  onPrismicError: function(err) {
    window.location = '/error.html'+(err ? '#'+err.message : '');
  }

}
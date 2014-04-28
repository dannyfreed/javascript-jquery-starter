var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://testgadole.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // -- OAuth
  clientId: 'U17Q6wEAACsAGdjq',
  clientSecret: '03cf64534a59f7a5e193b059976e6e00',

  // -- Links resolution rules
  linkResolver: function(ctx, doc) {
    return 'detail.html?id=' + doc.id + '&slug=' + doc.slug + ctx.maybeRefParam;
  },

  // -- To customize: what to do when an error happens on the prismic.io side
  onPrismicError: function(err) {
    window.location = '/error.html'+(err ? '#'+err.message : '');
  }

}
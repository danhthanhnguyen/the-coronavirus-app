const requests = {
  summary: '/summary',
  byCountry: function(slug) {
    return `/dayone/country/${slug}`;
  },
  countries: '/countries'
}

export default requests;
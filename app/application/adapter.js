export default DS.RESTAdapter.extend({
  addTrailingSlashes: false,
  host: 'http://localhost:8000',
  namespace: 'v2'
});

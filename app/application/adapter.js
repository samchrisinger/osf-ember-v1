//import LFAdapter from 'ember-localforage-adapter/adapters/localforage';
//
//export default LFAdapter;

//import DRFAdapter from './drf';
//
//export default DRFAdapter.extend({
//
//});

//export default DS.RESTAdapter.extend({
//  addTrailingSlashes: false,
//  host: 'http://localhost:8000',
//  namespace: 'v2'
//});

import DRFAdapter from 'ember-django-adapter/adapters/drf';

export default DRFAdapter.extend({
  host: 'http://localhost:8000',
  namespace: 'v2'
});

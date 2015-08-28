import Ember from 'ember';
import DS from 'ember-data';

import config from '../config/environment';
var Osf = config.APP;

export default DS.RESTAdapter.extend({
    host: Osf.API_HOST,
    namespace: Osf.API_NAMESPACE,
    headers: function() {
        return {
            Authorization: 'Bearer ' + Ember.get(document.cookie.match(/osf\=([^;]*)/), "1")
        };
    }.property().volatile(),
    buildURL: function(type, id, record) {
        //call the default buildURL and then append a slash
        return this._super(type, id, record) + '/';
    },
});

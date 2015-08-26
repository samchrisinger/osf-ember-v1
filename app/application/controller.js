import Ember from 'ember';

export default Ember.Controller.extend({
  appName: 'OSF',
  fullName: Ember.computed.alias('session.model.fullName')
});

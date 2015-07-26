import Ember from 'ember';

export default Ember.Controller.extend({
  appName: 'OSF',
  sessionModel: Ember.computed.alias('session.model')
});

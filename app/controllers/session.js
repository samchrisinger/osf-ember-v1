import Ember from 'ember';

export default Ember.Controller.extend({
  isAuthenticated: false,
  //fullName: Ember.computed.alias('model.fullName')
  fullName: function () {
    return this.get('model.fullName');
  }.property('model.fullName'),
  save: function() {
    this.set('model.fullName', this.fullName);
  }
});

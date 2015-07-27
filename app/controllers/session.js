import Ember from 'ember';

export default Ember.Controller.extend({
  isAuthenticated: false,
  fullName: function () {
    return this.get('model.fullName');
  }.property('model.fullName'),
  save: function() {
    this.set('model.fullName', this.fullName);
  }
});

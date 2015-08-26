import Ember from 'ember';

export default Ember.Controller.extend({
  isAuthenticated: Ember.computed('model', (m)=>!!m),
  fullname: Ember.computed.alias('model.fullname'),
  //fullName: function () {
  //  return this.get('model.fullName');
  //}.property('model.fullName'),
  save: function() {
    this.set('model.fullName', this.fullName);
  }
});

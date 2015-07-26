import Ember from 'ember';

export default Ember.Controller.extend({
  fullName: Ember.computed.alias('session.fullName'),
  //fullName: function() {
  //  return this.session.get('fullName');
  //}.property('session.fullName')
  save: function () {
    this.session.save();
  }
});

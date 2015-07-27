import Ember from 'ember';

export default Ember.Controller.extend({
  fullName: Ember.computed.alias('session.fullName'),
  save: function () {
    this.session.save();
  }
});

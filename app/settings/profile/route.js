import Ember from 'ember';

export default Ember.Route.extend({
  //setupController(controller, model) {
  //},
  //model() {
  //  console.log('settings -> profile');
  //
  //  //this.store.push('user', {
  //  //  'id': 1,
  //  //  'firstName': 'John',
  //  //  'lastName': 'Doe',
  //  //  'birthday': '3/12/1990',
  //  //  'active': true
  //  //});
  //
  //  //var userModel = this.store.findAll('user', {})[0];
  //  //
  //  //if (!userModel) {
  //  //  userModel = this.store.createRecord('user');
  //  //}
  //  //
  //  //userModel.set('fullName', 'John Doe');
  //  //
  //  //return {
  //  //  userModel: userModel
  //  //};
  //
  //  //var userModel = this.store.findAll('user', {}).objectAt(0);
  //  var userModel = this.store.findAll('user', {}).objectAt(0);
  //
  //  return {
  //    userModel: userModel
  //  }
  //},
  actions: {
    cancel() {
      console.log('action: cancel');
    },
    save() {
      console.log('action: save');
      //console.log(this.controller.session.fullName);
      //console.log(this.controller.session.model.get('fullName'));
      //this.set('controller.session.fullName', this.get('controller.fullName'));
      this.controller.save();
      //this.get('model.profileNameModel').save(function () {
      //  this.set('model.auth.fullName', this.get('model.profileNameModel.fullName'));
      //});
    }
  }
});

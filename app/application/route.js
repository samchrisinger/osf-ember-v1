import Ember from 'ember';

export default Ember.Route.extend({
  //setupController(controller) {
  //  controller.set('model', 'user');
  //},
  model() {
    console.log('application - route (model)');

    //var promise = new Ember.RSVP.Promise((resolve, reject) => {
    //  this.store.find('user').then((users) => {
    //    if (!users.objectAt(0)) {
    //      var userModel = this.store.createRecord('user');
    //      userModel.set('fullName', 'John Doe');
    //      userModel.save();
    //      return resolve(userModel)
    //    }
    //    resolve(users.objectAt(0));
    //  });
    //});

    //return promise;
  }
});

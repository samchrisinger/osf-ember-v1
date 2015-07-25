import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //this.store.push('user', {
    //  'id': 1,
    //  'firstName': 'John',
    //  'lastName': 'Doe',
    //  'birthday': '3/12/1990',
    //  'active': true
    //});

    var userNameModel = this.store.findAll('user-name', {})[0];

    if (!userNameModel) {
      userNameModel = this.store.createRecord('user-name');
    }

    userNameModel.set('fullName', 'John Doe');

    return {
      userNameModel: userNameModel
    };
  }
});

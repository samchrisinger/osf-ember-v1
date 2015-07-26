import Ember from 'ember';
//import App from '../app';

export function initialize(application) {
  //application.deferReadiness();

  //return new Ember.RSVP.Promise((resolve, reject) => {
  //  application.container.lookup('store:main').find('user').then((users) => {
  //    var user = users.objectAt(0);
  //
  //    if (!user) {
  //      user = application.container.lookup('store:main').createRecord('user');
  //      user.set('fullName', 'John Doe');
  //      user.save();
  //    }
  //
  //    //var controller = application.container.lookup('controller:session');
  //    //controller.set('model', user);
  //    //application.container.register('services:session', controller);
  //    //application.inject('controller', 'session', 'service:session');
  //
  //    resolve();
  //  });
  //});

  //var user = container.lookup('store:main').createRecord('user');
  //user.set('fullName', 'John Doe');
  //user.save();
  //
  //container.register('services:session', App.Session);
  //container.inject('controller', 'session', 'service:session');


  //container.lookup('store:main').find('user', 'current').then((user) => {
  //  App.Session.set('model', user);
  //
  //  container.register('services:session', App.Session);
  //  container.inject('controller', 'session', 'service:session');
  //});

  //application.register('services:session', App.Session);
  //application.inject('controller', 'session', 'service:session');
}


export default {
  name: 'session',
  initialize: initialize
};

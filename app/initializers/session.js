import Ember from 'ember';
//import App from '../app';

export function initialize(container, application) {
  application.deferReadiness();

  container.lookup('store:main').find('user').then((users) => {
    var user = users.objectAt(0);

    if (!user) {
      user = application.container.lookup('store:main').createRecord('user');
      user.set('fullName', 'John Doe');
      user.save();
    }

    var controller = container.lookup('controller:session');
    console.log(user);
    controller.set('model', user);

    container.register('services:session', controller, { singleton: true, instantiate: false });
    application.inject('controller', 'session', 'services:session');

    application.advanceReadiness();
  });

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
  name: 'services',
  after: 'store',
  initialize: initialize
};

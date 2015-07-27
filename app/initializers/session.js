import Ember from 'ember';

export function initialize(container, application) {
  application.deferReadiness();

  container.lookup('service:store').findAll('user').then((users) => {
    var user = users.objectAt(0);

    if (!user) {
      user = application.container.lookup('service:store').createRecord('user');
      user.set('fullName', 'John Doe');
      user.save();
    }

    var session = container.lookup('controller:session');
    session.set('model', user);

    application.register('services:session', session, { singleton: true, instantiate: false });
    application.inject('controller', 'session', 'services:session');

    application.advanceReadiness();
  });
}

export default {
  name: 'services',
  after: 'store',
  initialize: initialize
};

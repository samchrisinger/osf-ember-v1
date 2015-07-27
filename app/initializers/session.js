export function initialize(container, application) {
  application.deferReadiness();

  container.lookup('service:store').findAll('user').then((users) => {
    var user = users.objectAt(0);

    if (!user) {
      user = container.lookup('service:store').createRecord('user');
      user.set('fullName', 'John Doe');
      user.save();
    }

    var session = container.lookup('controller:session');
    session.set('model', user);

    application.register('service:session', session, { singleton: true, instantiate: false });
    application.inject('controller', 'session', 'service:session');

    application.advanceReadiness();
  });
}

export default {
  name: 'service:session',
  after: 'store',
  initialize: initialize
};

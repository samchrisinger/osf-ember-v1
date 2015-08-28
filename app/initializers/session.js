import Ember from 'ember';

Ember.Application.instanceInitializer({
    name: 'service:session',
    after: 'ember-data',
    initialize: function(instance) {
        var container = instance.container;
        var application = instance.application;

        var session = container.lookup('controller:session');
        container.lookup('service:store').findRecord('user', 'me').then((user) => {
            session.set('model', user);
        }, () => {
            session.set('model', null);
        }).then(() => {
            application.register('service:session', session, {
                singleton: true,
                instantiate: false
            });
            application.inject('controller', 'session', 'service:session');
        });
    }
});

export default {
    name: 'service:session',
    after: 'ember-data',
    store: Ember.inject.service('store'),
    initialize: function(registry, application) {
        application.register('service:session', 'session', {
            singleton: true
        });
    }
};

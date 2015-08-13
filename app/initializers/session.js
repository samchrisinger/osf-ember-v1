export function initialize(container, application) {
    application.deferReadiness();


    var session = container.lookup('controller:session');
    container.lookup('service:store').findRecord('user', 'me').then((user) => {
        session.set('model', user);
    }, () => {
        session.set('model', null);
    }).then(()=>{
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

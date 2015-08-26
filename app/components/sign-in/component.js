import Ember from 'ember';

export default Ember.Component.extend({
    loginUrl: Ember.computed(() => {
        return `${Osf.CAS_HOST}/login?auto=True&service=${window.location}`;
    })
});

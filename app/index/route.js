import Ember from 'ember';

export default Ember.Route.extend({
 actions: {
    willTransition: function(transition) {
        if (session.isAuthenticated) {
            transition.redirectTo('dashboard');
        }
    }
  }
});

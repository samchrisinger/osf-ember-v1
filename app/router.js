import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('settings', function() {
    this.route('account');
    this.route('profile');
    this.route('addons');
    this.route('notifications');
  });
});

export default Router;

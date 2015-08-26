import Ember from 'ember';

var PAGE_LINKS = [
{
    route: 'settings.profile',
    title: 'Profile Information'
},
{
    route: 'settings.account',
    title: 'Account Settings'
},
{
    route: 'settings.addons',
    title: 'Configure Add-on Accounts'
},
{
    route: 'settings.notifications',
    title: 'Notifications'
}
];


export default Ember.Route.extend({
  model() {
        console.log('settings');
      return {
          links: PAGE_LINKS
      };
  }
});

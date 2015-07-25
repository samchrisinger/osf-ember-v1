import Ember from 'ember';

export default Ember.Component.extend({
  foo: 'blah',
  bar: function () {
    return {
      'fullName': this.get('model.fullName'),
      'givenName': this.get('model.givenName')
    };
  }.property(),
  actions: {
    submit: function () {
      this.set('model.fullName', this.get('bar').fullName);
      console.log('submit!!!');
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel() {
      console.log('action: cancel');
    },
    save() {
      console.log('action: save');
      this.controller.save();
    }
  }
});

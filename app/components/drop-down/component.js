import Ember from 'ember';

export default Ember.Component.extend({
    tag: 'div',
    tagName: 'div',
    classNames: ['dropdown'],
    classNameBindings: ['expanded:open'],
    expanded: false,
    actions: {
        toggle: function() {
            this.toggleProperty('expanded');
        }
    }
});

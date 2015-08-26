import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    public: DS.attr('boolean'),
    category: DS.attr('string'),
    dateCreated: DS.attr('date'),
    dateModified: DS.attr('date'),
    description: DS.attr('string')
    // categoryIcon: Ember.computed
});

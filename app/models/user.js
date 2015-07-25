import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  birthday:  DS.attr('date'),
  active: DS.attr('bool')
});

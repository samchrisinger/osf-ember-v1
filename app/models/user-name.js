import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr('string'),
  givenName: DS.attr('string'),
  familyName: DS.attr('string')
});

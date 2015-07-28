import DS from 'ember-data';

export default DS.Model.extend({
  fullname: DS.attr('string'),
  givenName: DS.attr('string'),
  middleName: DS.attr('string'),
  familyName: DS.attr('string'),
  suffixName: DS.attr('string'),
  dateRegistered: DS.attr('date'),
  gravatarUrl: DS.attr('string'),
  employmentInstitutions: DS.hasMany('user-employment'),
  active: DS.attr('boolean')
});

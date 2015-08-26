import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  institution: DS.attr('string'),
  department: DS.attr('string'),
  location: DS.attr('string'),
  startMonth: DS.attr('number'),
  startYear: DS.attr('number'),
  endMonth: DS.attr('number'),
  endYear: DS.attr('number'),
  ongoing: DS.attr('boolean'),
  active: DS.attr('boolean')
});

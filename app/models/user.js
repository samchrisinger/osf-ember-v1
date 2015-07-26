import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr('string'),
  //firstName: DS.attr('string'),
  //lastName: DS.attr('string'),
  //birthday:  DS.attr('date'),
  //employment: DS.belongsTo('user-employment'),
  //active: DS.attr('bool')
});

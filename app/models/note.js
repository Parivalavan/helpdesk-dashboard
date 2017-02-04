import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr('string'),
  details: DS.attr('string'),
  timeago: DS.attr('string'),
  ticket: DS.belongsTo()
});

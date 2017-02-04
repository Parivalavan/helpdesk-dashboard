import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr('string'),
  subject: DS.attr('string'),
  agent: DS.attr('string'),
  replies: DS.attr('number'),
  days: DS.attr('number')
});

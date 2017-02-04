import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr('string'),
  subject: DS.attr('string'),
  details: DS.attr('string'),
  agent: DS.attr('string'),
  status: DS.attr('string'),
  priority: DS.attr('string'),
  notes: DS.hasMany(),
  unassigned: Ember.computed('agent', function() {
    return this.get('agent') === 'Unassigned';
  })
});

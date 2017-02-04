import Ember from 'ember';

export default Ember.Controller.extend({
  unassigned: Ember.computed.filterBy('model', 'unassigned', true)
});

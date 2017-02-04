import Ember from 'ember';

export default Ember.Controller.extend({
  closed: Ember.computed.filterBy('model', 'status', 'closed')
});

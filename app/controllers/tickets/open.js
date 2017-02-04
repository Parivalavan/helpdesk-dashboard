import Ember from 'ember';

export default Ember.Controller.extend({
  open: Ember.computed.filterBy('model', 'status', 'open')
});

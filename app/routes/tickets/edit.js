import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('isExpanded', false);
    controller.set('details', null);
  }
});

import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('isExpanded', false);
    controller.set('details', null);
  }
});

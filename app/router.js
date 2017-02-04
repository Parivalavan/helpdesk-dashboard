import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('tickets');
  this.route('tickets.edit', {path: 'tickets/:ticket_id/edit'});
  this.route('tickets.open', {path: 'tickets/open'});
  this.route('tickets.closed', {path: 'tickets/closed'});

  this.route('reports.show', {path: 'reports/show'});
});

export default Router;

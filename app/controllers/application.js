import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  onReportsRoute: Ember.computed('currentPath', function(){
    return this.get('currentPath') === 'reports.show';
  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});

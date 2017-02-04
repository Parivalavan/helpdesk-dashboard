import Ember from 'ember';

export default Ember.Controller.extend({
  isExpanded: false,
  details: null,
  isOpen: Ember.computed('model.status', function() {
    return this.get('model.status') === 'open';
  }),
  isClosed: Ember.computed('model.status', function() {
    return this.get('model.status') === 'closed';
  }),
  isLow: Ember.computed('model.priority', function() {
    return this.get('model.priority') === 'low';
  }),
  isMedium: Ember.computed('model.priority', function() {
    return this.get('model.priority') === 'medium';
  }),
  isHigh: Ember.computed('model.priority', function() {
    return this.get('model.priority') === 'high';
  }),
  actions: {
    update(field, value) {
      let model = this.get('model');
      model.set(field, value);
      model.save();
    },
    toggle() {
      this.toggleProperty('isExpanded');
    },
    addNote(details) {
      let ticket = this.get('model');
      let note = this.store.createRecord('note', {
        details: details,
        ticket: ticket
      });
      note.save().then( ()=> {
        this.set('details', null);
        ticket.reload();
      });
    }
  }
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ticket', 'Unit | Model | ticket', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it is Unassigneds', function(assert) {
  let model = this.subject( {subject: 'Test', agent: 'Unassigned' });
  assert.equal(model.get('unassigned'), true);
});

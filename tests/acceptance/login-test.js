import { test } from 'qunit';
import moduleForAcceptance from 'dashboard/tests/helpers/module-for-acceptance';
import { invalidateSession } from 'dashboard/tests/helpers/ember-simple-auth';
import page from 'dashboard/tests/pages/login';

moduleForAcceptance('Acceptance | Login', {
  beforeEach() {
    invalidateSession(this.application);
  },
  afterEach() {
    server.shutdown();
  },
});

function loginForRole(name) {
  page.visit()
    .identification(name)
    .password('secret');
  andThen( ()=> {
    page.submit();
  });
}

test('Dashboard Login as Agent', function(assert) {
  loginForRole('agent');
  andThen( ()=> {
    assert.equal(currentURL(), '/');
    assert.equal(currentRouteName(), 'index');
  });
});

test('Failed login shows error message', function(assert) {
  loginForRole('jonathan');
  andThen(function() {
    assert.equal(currentURL(), '/login');
    assert.equal(currentRouteName(), 'login');
  });
});

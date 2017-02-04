import {
  create,
  visitable,
  fillable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/login'),
  identification: fillable('#identification'),
  password: fillable('#password'),
  submit: clickable('button')
});
